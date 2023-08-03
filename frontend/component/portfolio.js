import React, { useEffect, useState } from "react";
import Image from "next/image";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper, useLightbox } from "simple-react-lightbox";

function Portfolio() {
  const [filter, setFilter] = useState("all");
  const { openLightbox } = useLightbox();
  const [projects, setProjects] = useState([]);

  const apiUrl = "http://localhost:1337/api/projects?populate=*";
  const bearerToken =
    "92626c31f4d061643edfefba3644eb53d25efb908d6bee8a7b550c02000927ae12ab289469ca3bfbeb799606115ebc3556e202071767cde15c03b14a835f7ff729f2ddc897bba3bf4cc8825079144e1f5e8980fc0f3a20e8f481508e832353cd8ecf87a111fdb19b94767074bc111ca44e794492dc72af30525c39aa3614497b";

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(apiUrl, {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        const portfolio = data.data.map((item) => {
          const category = item.attributes.title
            .replace(/"/g, "")
            .split(", ");
          const src = item.attributes.projectimg.data.attributes.formats
            .medium.url;
          const author = item.attributes.author;

          return {
            title: "website landing pages",
            category: category,
            imageSrc: src,
            img: (
              <Image
                src={src}
                layout="responsive"
                width={370}
                height={370}
                alt={author}
              />
            ),
            author: author,
          };
        });
        setProjects(portfolio);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    const filtered = projects.map((p) => ({
      ...p,
      filtered: p.category.includes(filter),
    }));
    setProjects(filtered);
  }, [filter]);

  return (
    <>
      <div className="site-filters style-1 clearfix center m-b40">
        <ul className="filters">
          <li className={`btn ${filter === "all" ? "active" : ""}`}>
            <a active={"all"} onClick={() => setFilter("all")}>
              All
            </a>
          </li>
          <li className={`btn ${filter === "web_design" ? "active" : ""}`}>
            <a active={"web_design"} onClick={() => setFilter("web_design")}>
              Web Design
            </a>
          </li>
          <li
            className={`btn ${filter === "web_development" ? "active" : ""}`}
          >
            <a
              active={"web_development"}
              onClick={() => setFilter("web_development")}
            >
              Web Development
            </a>
          </li>
          <li className={`btn ${filter === "branding" ? "active" : ""}`}>
            <a active={"branding"} onClick={() => setFilter("branding")}>
              Branding
            </a>
          </li>
          <li className={`btn ${filter === "mobile_app" ? "active" : ""}`}>
            <a active={"mobile_app"} onClick={() => setFilter("mobile_app")}>
              Mobile App
            </a>
          </li>
          <li className={`btn ${filter === "seo" ? "active" : ""}`}>
            <a active={"seo"} onClick={() => setFilter("seo")}>
              SEO
            </a>
          </li>
        </ul>
      </div>

      <SimpleReactLightbox>
        <SRLWrapper>
          <div className="clearfix">
            <ul id="masonry" className="row" data-column-width="3">
              {projects.map(
                (item) =>
                  item.filtered === true && (
                    <li
                      key={item.title}
                      className="card-container col-lg-4 col-md-6 col-sm-6 web_design wow fadeInUp"
                      data-wow-duration="2s"
                      data-wow-delay="0.1s"
                    >
                      <div className="dlab-box style-1 m-b30">
                        <div className="dlab-media">
                          <a
                            href=""
                            onClick={() => openLightbox(item.imageSrc)}
                          >
                            {item.img}
                          </a>
                        </div>
                      </div>
                    </li>
                  )
              )}
            </ul>
          </div>
        </SRLWrapper>
      </SimpleReactLightbox>
    </>
  );
}

export default Portfolio;

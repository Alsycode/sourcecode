import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import SimpleReactLightbox from 'simple-react-lightbox';
import { SRLWrapper, useLightbox } from 'simple-react-lightbox';

function Portfolio() {
  const [filter, setFilter] = useState('all');
  const [projects, setProjects] = useState([]);
  const { openLightbox } = useLightbox();

  useEffect(() => {
    // Fetch data from the API URL and update the projects state
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/projects?populate=*');

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        if (data && data.data ) {
          const portfolioData = data.data.map((item) => {
            const category = item.attributes.title
            const src = item.attributes.projectimg.data.url;
            const author = item.attributes.author;

            return {
              title: "Software Landing Page Design",
              category: category,
              imageSrc: src,
              img: <Image src={src} layout="responsive" width={500} height={500} />,
              author: author
            };
          });

          setProjects(portfolioData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Filter projects based on the selected category
    const filtered = projects.map((p) => ({
      ...p,
      filtered: filter === "all" ? true : p.category.includes(filter)
    }));
    setProjects(filtered);
  }, [filter, projects]);

  return (
    <>
      <div className="site-filters style-1 clearfix center m-b40">
        <ul className="filters">
          <li className={`btn ${filter === "all" ? "active" : ""}`}>
            <a onClick={() => setFilter("all")}>All</a>
          </li>
          <li className={`btn ${filter === "web_design" ? "active" : ""}`}>
            <a onClick={() => setFilter("web_design")}>Web Design</a>
          </li>
          <li className={`btn ${filter === "web_development" ? "active" : ""}`}>
            <a onClick={() => setFilter("web_development")}>Web Development</a>
          </li>
          <li className={`btn ${filter === "branding" ? "active" : ""}`}>
            <a onClick={() => setFilter("branding")}>Branding</a>
          </li>
          <li className={`btn ${filter === "mobile_app" ? "active" : ""}`}>
            <a onClick={() => setFilter("mobile_app")}>Mobile App</a>
          </li>
          <li className={`btn ${filter === "seo" ? "active" : ""}`}>
            <a onClick={() => setFilter("seo")}>SEO</a>
          </li>
        </ul>
      </div>

      <SimpleReactLightbox>
        <SRLWrapper>
          <div className="clearfix">
            <ul id="masonry" className="row" data-column-width="3">
              {projects.map((item) =>
                item.filtered === true ? (
                  <li
                    key={item.id}
                    className="card-container col-lg-4 col-md-6 col-sm-6 web_design wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.1s"
                  >
                    <div className="dlab-box style-1 m-b30">
                      <div className="dlab-media">
                        <a href="" onClick={() => openLightbox(item.imageSrc)}>
                          {item.img}
                        </a>
                      </div>
                    </div>
                  </li>
                ) : null
              )}
            </ul>
          </div>
        </SRLWrapper>
      </SimpleReactLightbox>
    </>
  );
}

export default Portfolio;

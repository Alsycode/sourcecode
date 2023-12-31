import React, { useState, useEffect } from "react"; // Import useState and useEffect
import Link from "next/link";
import Footer from "../layout/footer";
import Header from "../layout/header-3";
import Image from "next/image"; // Import the Image component from Next.js

function Team1() {
  const [data, setData] = useState([]); // State to store the fetched data
  const apiUrl = 'http://localhost:1337/api/blogs?populate=*';

  useEffect(() => {
    const bearerToken = '92626c31f4d061643edfefba3644eb53d25efb908d6bee8a7b550c02000927ae12ab289469ca3bfbeb799606115ebc3556e202071767cde15c03b14a835f7ff729f2ddc897bba3bf4cc8825079144e1f5e8980fc0f3a20e8f481508e832353cd8ecf87a111fdb19b94767074bc111ca44e794492dc72af30525c39aa3614497b'; // Replace with your actual Bearer token

    const fetchBlogs = async () => {
      try {
        const res = await fetch(apiUrl, {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        });
        const jsonData = await res.json();

        // Check if the fetched data is an array before setting it to the state
        if (Array.isArray(jsonData.data)) {
          setData(jsonData.data.map(item => item.attributes)); // Extract the 'attributes' field from the API response
        } else {
          console.error('Error fetching data: Data is not an array');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchBlogs();
  }, []);
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <div
          className="dlab-bnr-inr overlay-primary-dark"
          style={{ backgroundImage: "url(images/banner/bnr1.jpg)" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Our Team</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Team
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}

        {/* <!-- Team --> */}
        <section
          className="content-inner"
          style={{ backgroundImage: "url(images/background/bg1.png)" }}
        >
          <div className="container">
            <div className="row flex justify-center px-10">
            {data.length > 0 ? (
          // Mapping over the 'data' state and rendering each blog item as a slide
          data.map((blog) => (
            <div className="item wow fadeInUp" key={blog.id} data-wow-duration="2s" data-wow-delay="0.1s">
              <div className="dlab-team style-1 m-b10">
                {/* Rendering the blog photo using Next.js Image component */}
                <div className="dlab-media">
                  <Image
                    width={400}
                    height={400}
                    src={blog.photo.data.attributes.formats.small.url}
                    alt={blog.title}
                  />
                </div>
                <div className="dlab-content">
                  <div className="clearfix">
                    {/* Rendering blog title and position */}
                    <h4 className="dlab-name">
                      <a href="/team-1">{blog.title}</a>
                    </h4>
                    <span className="dlab-position">{blog.position}</span>
                  </div>
                  {/* Rendering social media icons */}
                  <ul className="dlab-social-icon primary-light">
                    <li>
                      <a href="https://en-gb.facebook.com/" className="fa fa-facebook"></a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" className="fa fa-instagram"></a>
                    </li>
                    <li>
                      <a href="https://twitter.com/login?lang=en" className="fa fa-twitter"></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))
        ) : (
          // If the 'data' state is empty, render a loading message
          <p>Loading...</p>
        )}
            </div>
          </div>
        </section>

        {/* <!-- Call To action --> */}
        <section
          style={{
            backgroundImage: "url(images/background/bg5.jpg)",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="row action-box style-1 align-items-center">
              <div
                className="col-xl-7 col-lg-8 col-md-8 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="section-head style-1">
                  <h6 className="sub-title bgl-primary m-b20 text-primary">
                    More With Us
                  </h6>
                  <h2 className="title">
                    You Want To Showcase Your Website In Top Join With Us
                  </h2>
                </div>
              </div>
              <div
                className="col-xl-5 col-lg-4 col-md-4 text-right m-b30 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <Link href='/contact-us-1'>
					<a  className="btn btn-link d-inline-flex align-items-center">
						<i className="fa fa-angle-right m-r10"></i>Join Now
					</a>
				</Link>	
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Team1;

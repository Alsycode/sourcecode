import { useState, useEffect } from 'react';
import Slider from "react-slick";
import Image from 'next/image';

function TeamSlider() {
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

  // Configuration settings for the react-slick Slider component
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    arrows: false,
    speed: 5000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      {/* React-Slick Slider component */}
      <Slider {...settings} className="team-carousel1 owl owl-carousel owl-none owl-theme owl-dots-primary-full">
        {data.length > 0 ? (
          // Mapping over the 'data' state and rendering each blog item as a slide
          data.map((blog) => (
            <div className="item wow fadeInUp" key={blog.id} data-wow-duration="2s" data-wow-delay="0.1s">
              <div className="dlab-team style-1 m-b10" key={blog.id}>
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
                    <span className="dlab-position">Senior Designer</span>
                  </div>
                  {/* Rendering social media icons */}
                  <ul className="dlab-social-icon primary-light">
                    <li >
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
      </Slider>
    </>
  );
}

export default TeamSlider;

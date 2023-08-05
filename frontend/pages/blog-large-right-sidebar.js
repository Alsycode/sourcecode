 

import React, { useState, useEffect } from "react";
import Header from "../layout/header-3";
import Footer from "./../layout/footer";
import Link from "next/link";
import Image from "next/image";

function BlogLargeRightSidebar() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const [searchQuery, setSearchQuery] = useState("");

  const fetchBlogContents = async () => {
    try {
      const res = await fetch(
        "http://localhost:1337/api/blogcontents?populate=*",
        {
          headers: {
            Authorization:
              "Bearer 92626c31f4d061643edfefba3644eb53d25efb908d6bee8a7b550c02000927ae12ab289469ca3bfbeb799606115ebc3556e202071767cde15c03b14a835f7ff729f2ddc897bba3bf4cc8825079144e1f5e8980fc0f3a20e8f481508e832353cd8ecf87a111fdb19b94767074bc111ca44e794492dc72af30525c39aa3614497b",
          },
        }
      );
      const data = await res.json();

      if (Array.isArray(data?.data)) {
        setBlogs(data.data.reverse());
      } else {
        console.error("Error fetching data: Data is not an array");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchBlogContents();
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchBlogContents();
  };

const handleSearchChange = (e) => {
  const searchValue = e.target.value;
  setSearchQuery(searchValue);
  setCurrentPage(1); // Reset the current page when the search query changes
};
const filteredBlogs = blogs.filter((blog) => {
  const fieldToSearch = blog.attributes.topic?.toLowerCase() || ""; // Update to the correct field for searching (e.g., "topic")
  const searchTerm = searchQuery.toLowerCase();
  return fieldToSearch.includes(searchTerm);
});

  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);

  const currentBlogs = filteredBlogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const handlePageChange = (page) => {
    if (page < 1) {
      page = 1;
    } else if (page > totalPages) {
      page = totalPages;
    }
    setCurrentPage(page);
  };

  return (
    <>
      <Header />
      <div className="page-content bg-white">
        <div
          className="dlab-bnr-inr overlay-primary-dark"
          style={{ backgroundImage: "url(images/banner/bnr1.jpg)" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Blog Large</h1>
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Blog
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <section
          className="content-inner bg-img-fix"
          style={{ backgroundImage: "url(images/background/bg1.png)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-8 m-b50">
                {currentBlogs.map((blog) => (
                  <div
                    className="dlab-blog style-1 bg-white text-center m-b50"
                    key={blog.id}
                  >
                    <div className="dlab-media dlab-img-effect zoom">
                      <Image
                        width={400}
                        height={270}
                        src={blog.attributes.blogphotos.data.attributes.url}
                        alt={blog.attributes.topic}
                      />
                    </div>
                    <div className="dlab-info">
                      <h4 className="dlab-title">
                        <a href="/blog-details-1">{blog.attributes.topic}</a>
                      </h4>
                      <p className="m-b0">{blog.attributes.explaination}</p>
                      <div className="dlab-meta meta-bottom">
                        <ul>
                          <li className="post-date">
                            <i className="flaticon-clock m-r10"></i>7 March,
                            2020
                          </li>
                          <li className="post-author">
                            <i className="flaticon-user m-r10"></i>By Johne Doe
                          </li>
                          <li className="post-comment">
                            <Link href="#">
                              <a>
                                <i className="flaticon-speech-bubble"></i>
                                <span>15</span>
                              </a>
                            </Link>
                          </li>
                          <li className="post-share">
                            <i className="flaticon-share"></i>
                            <ul>
                              <li>
                                <a
                                  className="fa fa-facebook"
                                  href="https://en-gb.facebook.com/"
                                ></a>
                              </li>
                              <li>
                                <a
                                  className="fa fa-twitter"
                                  href="https://twitter.com/login?lang=en"
                                ></a>
                              </li>
                              <li>
                                <a
                                  className="fa fa-linkedin"
                                  href="https://www.linkedin.com/login"
                                ></a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}

<nav aria-label="Blog Pagination">
  <ul className="pagination text-center p-t20">
    <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
      <Link href="#">
        <a
          className="page-link prev"
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Prev
        </a>
      </Link>
    </li>
    {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNum) => (
      <li
        key={pageNum}
        className={`page-item ${currentPage === pageNum ? "active" : ""}`}
      >
        <Link href="#">
          <a
            className="page-link"
            onClick={() => handlePageChange(pageNum)}
          >
            {pageNum}
          </a>
        </Link>
      </li>
    ))}
    <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
      <Link href="#">
        <a
          className="page-link next"
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </a>
      </Link>
    </li>
  </ul>
</nav>

              </div>
              <div className="col-xl-4 col-lg-4 m-b30">
                <aside className="side-bar sticky-top">
                  <div className="widget widget_search">
                    <h2 className="widget-title">Search</h2>
                    <form className="dlab-form" onSubmit={handleSearchSubmit}>
  <div className="input-group">
    <input
      type="text"
      className="form-control"
      placeholder="Search blogs..."
      name="search" // Add a name attribute to the input field
      value={searchQuery}
      onChange={handleSearchChange} // Call handleSearchChange on input change
    />
    <span className="input-group-btn">
      <button className="btn btn-primary" type="submit">
        <i className="ti-search"></i>
      </button>
    </span>
  </div>
</form>

                  </div>
                  <div className="widget widget_archive">
                    <h2 className="widget-title">Category</h2>
                    <ul>
                      <li>
                        <Link href="#">
                          <a>
                            Design<span>05</span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            Development<span>25</span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            SEO<span>20</span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            App Design<span>08</span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            Branding<span>22</span>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                 <div className="widget recent-posts-entry">
                    <h2 className="widget-title">Recent Posts</h2>
                    <div className="widget-post-bx">
                      {currentBlogs.slice(0, 4).map((blog) => (
                        <div className="widget-post clearfix" key={blog.id}>
                          <div className="dlab-media">
                            <Image
                              width={400}
                              height={270}
                              src={
                                blog.attributes.blogphotos.data.attributes
                                  .formats.small.url
                              }
                              alt={blog.attributes.heading}
                            />
                          </div>
                          <div className="dlab-info">
                            <h4 className="title">
                              <a href="/blog-details-1">
                                {blog.attributes.heading}
                              </a>
                            </h4>
                            <div className="dlab-meta">
                              <ul>
                                <li className="post-date">
                                  {" "}
                                  {blog.attributes.Date}
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="widget widget_archive">
                    <h2 className="widget-title">Archives</h2>
                    <ul>
                      <li>
                        <Link href="#">
                          <a>
                            January<span>05</span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            Fabruary<span>25</span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            March<span>20</span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            April<span>08</span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            May<span>22</span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            Jun<span>11</span>
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>
                            July<span>19</span>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="widget widget_tag_cloud">
                    <h2 className="widget-title">Tags</h2>
                    <div className="tagcloud">
                      <Link href="#">
                        <a>Business</a>
                      </Link>
                      <Link href="#">
                        <a>News</a>
                      </Link>
                      <Link href="#">
                        <a>Brand</a>
                      </Link>
                      <Link href="#">
                        <a>Website</a>
                      </Link>
                      <Link href="#">
                        <a>Internal</a>
                      </Link>
                      <Link href="#">
                        <a>Strategy</a>
                      </Link>
                      <Link href="#">
                        <a>Brand</a>
                      </Link>
                      <Link href="#">
                        <a>Mission</a>
                      </Link>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>

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
                <Link href="/contact-us-1">
                  <a className="btn btn-link d-inline-flex align-items-center">
                    <i className="fa fa-angle-right m-r10"></i>Join Now
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>      <Footer />
    </>
  );
}

export default BlogLargeRightSidebar;

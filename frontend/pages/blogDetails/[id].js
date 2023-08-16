// pages/BlogDetail.jsx
import React, { useState, useEffect } from "react";
import Header from "../../layout/header";
import Footer from "../../layout/footer";
import { useRouter } from "next/router";
import Link from "next/link"; // Import the Link component
import Image from "next/image";

function blogDetails() {
    const [blogs, setBlogs]   = useState([])
  const router = useRouter();
  const { id } = router.query;
  console.log(id)
 
  const [imageUrl, setImageUrl] = useState("")
  const [blog, setBlog] = useState([]); // State to store the fetched blog data
 const [detailed,setDetailed] = useState("")
  const [topicData,setTopicData] = useState("")
  const [blockQuote,setBlockQuote] = useState("")
  useEffect(() => {
    // Fetch the blog data based on the ID
    const fetchBlogData = async () => {
      try {
        const res = await fetch(
          `http://localhost:1337/api/blogcontents/${id}?populate=*`,
          {
            headers: {
              Authorization:
                "Bearer 92626c31f4d061643edfefba3644eb53d25efb908d6bee8a7b550c02000927ae12ab289469ca3bfbeb799606115ebc3556e202071767cde15c03b14a835f7ff729f2ddc897bba3bf4cc8825079144e1f5e8980fc0f3a20e8f481508e832353cd8ecf87a111fdb19b94767074bc111ca44e794492dc72af30525c39aa3614497b",
            },
          }
        );
        const data = await res.json();
        console.log(data.data.id)
        const imageurl = data.data.attributes.blogphotos.data.attributes.formats.large.url;
        const topic = data.data.attributes.topic
        const blocKquote = data.data.attributes.blockquote
        const explain =  data.data.attributes.explaination
        setDetailed(explain)
        setImageUrl(imageurl)
        setTopicData(topic)
        setBlockQuote(blocKquote)
        console.log(imageUrl)
         // Update the state with the fetched blog data
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };


    fetchBlogData();
  }, [id]);


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
  const handleRelatedBlogClick = (clickedBlogId) => {
   const updatedPoste = blogs.filter(blog => blog.id !== clickedBlogId);
   setBlogs(updatedPoste)
    router.push(`/blogDetails/${clickedBlogId}`);
  };

  
  return (
    <>
       
        <Header/>
<div className="page-content bg-white">
  {/* <!-- Banner  --> */}
  <div className="dlab-bnr-inr overlay-primary-dark" style={{"backgroundImage":"url(images/banner/bnr1.jpg)"}}>
      <div className="container">
          <div className="dlab-bnr-inr-entry">
              <h1>Blog Detail</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                  <ul className="breadcrumb">
                      <li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Blog</li>
                  </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
          </div>
      </div>
  </div>
  {/* <!-- Banner End --> */}
  
  {/* <!-- Blog Large --> */}
  <section className="content-inner bg-img-fix" >
      <div className="container">
          <div className="row">
              <div className="col-xl-8 col-lg-8 m-b50">
                  {/* <!-- blog start --> */}
                
                  <div className="dlab-blog blog-single style-1">
                      <div className="dlab-media rounded-md shadow" key={blog.id}>
                      
                      <div className="dlab-media dlab-img-effect zoom">
                      {imageUrl? (
                        <Image
                          width={700}
                          height={270}
                          src={imageUrl}
                          alt="{blog.attributes.topic}"
                        />
                      ) : (
                        <span>No Image Available</span>
                      )}
                    </div>
                      
              
                      </div>
                      <div className="dlab-meta m-t10">
                          <ul>
                            <li>{blog.topic}</li>
                              <li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2020</li>
                              <li className="post-author"><i className="flaticon-user m-r10"></i>By  Johne Doe</li>
                          </ul>
                      </div>
                      { topicData ? (<h4 className="dlab-title">{topicData}</h4>) : (<span>no data</span>)}
                     
                      <div className="dlab-post-text">
                          <p>{detailed}</p>
                          <blockquote className="blockquote style-1">
                          {blockQuote ? (<p>{blockQuote}</p>) : (<span>no data</span>)}
                          </blockquote>
                       
                          <p>Fusce sem ligula, imperdiet sed nisi sit amet, euismod posuere dolor. Vestibulum in ante ut tortor eleifend venenatis. Morbi ac hendrerit nisl. Sed auctor magna lacus, in placerat nisl sollicitudin ut. Morbi feugiat ante velit, eget convallis arcu iaculis vel. Fusce in rhoncus quam. Integer dolor arcu, ullamcorper sed auctor vitae, porttitor quis erat. </p>
                          <div className="alignleft rounded-md shadow" > {imageUrl? (
                        <Image
                          width={400}
                          height={270}
                          src={imageUrl}
                          alt="{blog.attributes.topic}"
                        />
                      ) : (
                        <span>No Image Available</span>
                      )}</div>
                         <p>{detailed}</p>
                      </div>
                      <div className="dlab-meta border-top">
                          <ul>
                              <li className="post-tags">
                                  Tags:
                                  <Link href="#"><a>#Child </a></Link> ,
                                  <Link href="#"><a>#Eduction </a></Link> ,
                                  <Link href="#"><a>#Money </a></Link> ,
                                  <Link href="#"><a>#Resturent </a></Link>
                              </li>
                              <li className="post-comment"><Link href="#"><a><i className="flaticon-speech-bubble"></i><span>15</span></a></Link></li>
                              <li className="post-share"><i className="flaticon-share"></i>
                                  <ul>
                                      <li><a className="fa fa-facebook" href="https://en-gb.facebook.com/"></a></li>
                                      <li><a className="fa fa-twitter" href="https://twitter.com/login?lang=en"></a></li>
                                      <li><a className="fa fa-linkedin" href="https://www.linkedin.com/login"></a></li>
                                  </ul>
                              </li>
                          </ul>
                      </div>
                  </div>
       
                  
                
              </div>
              <div className="col-xl-4 col-lg-4 m-b30">
                  <aside className="side-bar sticky-top">
                  <div className="widget recent-posts-entry">
    <h2 className="widget-title">Related Posts</h2>
    <div className="widget-post-bx">
        {blogs.slice(0, 4).map(blog => (
                    <div className="widget-post clearfix" key={blog.id}>
                        <div className="dlab-media">
                            {blog.attributes.blogphotos.data.attributes.formats.thumbnail.url ? (
                                <Image
                                    width={245}
                                    height={150}
                                    src={blog.attributes.blogphotos.data.attributes.formats.thumbnail.url}
                                    alt={blog.attributes.heading}
                                />
                            ) : (
                                <p>No image</p>
                            )}
                        </div>
                        <div className="related-blog">
         
              <div
                key={blog.id}
                onClick={() => handleRelatedBlogClick(blog.id)}
              >
                <h4 className="title">
                  <Link href={`/blogDetails/${blog.id}`}>
                    <a>{blog.attributes.topic}</a>
                  </Link>
                </h4>
              </div>
         
                        </div>
                    </div>
             
       ))}
    </div>
</div>

                  
                     
                     
                  </aside>
              </div>
          </div>
      </div>
  </section>
  
  {/* <!-- Call To Action --> */}

  
</div>
<Footer/>
       

     
    </>
  );
}

export default blogDetails;

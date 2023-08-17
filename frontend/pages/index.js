import { useEffect } from "react";
import Slider1 from "../element/slider-1";
import Clients from "../element/clients";
import Service from "../element/service";
import AboutUs from "../element/aboutUs";
import Counter from "../element/counter";
import Features from "../element/our-features";
import Projects from "../element/projects";
import Newsletter from "../element/newsletter";
import Team from "../element/team";
import Pricing from "../element/pricing";
import Testimonial from "../element/testimonial";
import Blog from "../element/blog";
import Quote from "../element/quote";
import Cta from "../element/cta";
import Footer from "../layout/footer";
import Header from "../layout/header";
import Contactus from "../component/contactus";
import { BlogProvider } from '../component/BlogContext'
import MailchimpFormContainer from "../component/mailChimpFormContainer";
 import { GHSProvider } from '../component/contextProvider';
import Products from "../component/products"
function Home() {
  useEffect(() => {
    document.querySelector("body").setAttribute("color", "color_1");
  }, []);
  return (
    <>
    <GHSProvider>
    <Header />
	  <div className="page-content bg-white" id="top">
        <Slider1 />
        <Clients />
        <Counter />
        <Service />
        <AboutUs />
        <Features />
        <Projects />
        <Newsletter />
        <Team />
        <Pricing />
        <Products/>
        <Testimonial />
     
        <Blog />
     <Quote/>
     
        <Cta />
	  { /* 
	  */}
      </div>
	  <Footer />
    </GHSProvider>
	
    </>
  );
}

export default Home;

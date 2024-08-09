import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "./Banner/Banner";
import Step from "./Step/Step";
import Benefit from "./Benefit/Benefit";
import Document from "./Docu/Document";
import StepCard from "./Step/StepCard";
import Footer from "./Footer/Footer";
import FooterBanner from "./FooterBanner/FooterBanner";
import Package from "./Package/Package";
import Testimonial from "./testimonial/testimonial";
import Category from "./Category/Category";
// import RepeatPayment from "../RepeatPayment/RepeatPayment";
import AccordionUsage from "./Accordian/AccordianNew";
import ContactSection from "./ContactSection/ContactSection";
import TemplateSection from "./TemplateSection/TemplateSection";
import Newsletter from "../Newsletter/Newsletter";
import CategoryNew from "./CategoryNew/CategoryNew";
import Features from "../Features/Features";
import PackageNitin from "./Package/PackageNitin";
import AboutUs from "./AboutSection/AboutUs";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <Banner />
      </div>
      <div>
        <Category />
      </div>
      <Features />
      {/* <div>
        <RepeatPayment />
      </div> */}
      <div>
        <Step />
      </div>
      <div>
        <Document />
      </div>
      <div>
        <Benefit />
      </div>
      <div>
        <Testimonial />
      </div>
      {/* <div>
        <PackageNitin />
      </div> */}
      <div>
        <Package />
      </div>
      <div>
        <AboutUs />
      </div>
      <div>
        <TemplateSection />
      </div>
      <div>
        <Newsletter />
      </div>
      <div>
        <ContactSection />
      </div>
      <div>
        <FooterBanner />
      </div>
      <div>
        <AccordionUsage />
      </div>

      <Footer />
    </div>
  );
}

export default Home;

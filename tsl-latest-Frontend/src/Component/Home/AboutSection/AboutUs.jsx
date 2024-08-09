import React, { useEffect } from "react";
import about from "../../../assets/template/3.webp";
import { useNavigate } from "react-router-dom";

function AboutUs() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollTocontactform = () => {
    const contactformSection = document.getElementById("contactform");
    if (contactformSection) {
      contactformSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="aboutUs">
      <div style={{ height: "50px" }}></div>
      <div
        className="flex flex-col sm:flex-row  sm:min-h-full overflow-hidden"
        style={{ height: "100%", padding: "2rem" }}
      >
        <img src={about} className="md:w-1/2" style={{ padding: "3rem" }} />
        <div
          className="md:w-1/2 min-h-full"
          style={{ marginTop: "5px", padding: "20px" }}
        >
          <p className="text-lg font-bold text-blue-900 p-10">
            Don’t worry, you’re in safe hands.
          </p>
          <span>Our Mission</span>

          <p className="text-slate-700 text-lg mt-2">
            At The SALT Legal, our mission is to empower businesses and
            individuals by navigating the complexities of the legal landscape.
            We strive to be more than just legal advisors; we are partners in
            your success, offering tailored solutions that align with your
            unique needs.
          </p>

          <p className="text-slate-700 text-lg mt-2">
            In a rapidly changing world, innovation and adaptability are
            crucial. The SALT Legal stays at the forefront of legal
            developments, leveraging innovative approaches to tackle emerging
            challenges and ensuring that our clients are well-prepared for the
            future.
          </p>

          <p className="text-slate-700 text-lg mt-2">
            At The SALT Legal, we believe in being proactive and strategic in
            our legal interventions. From preventing disputes before they
            escalate to developing comprehensive compliance strategies, our goal
            is to keep you ahead of the legal curve and minimize risks.
          </p>
          <p className="text-slate-700 text-lg mt-2">
            At The SALT Legal, we believe in being proactive and strategic in
            our legal interventions. From preventing disputes before they
            escalate to developing comprehensive compliance strategies, our goal
            is to keep you ahead of the legal curve and minimize risks.
          </p>
        </div>
      </div>
      <div
        className="w-full"
        style={{ textAlign: "center", padding: "2rem 0 3rem 0" }}
      >
        <button onClick={scrollTocontactform}>CONNECT US</button>
      </div>
    </div>
  );
}

export default AboutUs;

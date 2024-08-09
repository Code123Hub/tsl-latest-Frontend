import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Accordian.css";
import { useNavigate, useLocation } from "react-router-dom";

export default function AccordionUsage() {
  const navigate = useNavigate();

  const handleDownload = () => {
    navigate("/package");
  };

  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <h2 className="text-cnt">
        <span>Frequently Asked Questions</span>
      </h2>
      <p className="text-cnt">Questions You Might Have</p>
      <div className="pad-new-60">
        <Accordion className="pad-accord-20">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            What areas of law does TheSaltLegal specialize in?
          </AccordionSummary>
          <AccordionDetails>
            We specialize in corporate law, intellectual property, real estate
            law, family law, and litigation. Our team of experienced attorneys
            is equipped to handle a wide range of legal issues, providing
            tailored solutions to meet your specific needs and protect your
            interests. We pride ourselves on delivering high-quality legal
            services to our diverse clientele.
          </AccordionDetails>
        </Accordion>
        <Accordion className="pad-accord-20">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Does TheSaltLegal offer services for startups?
          </AccordionSummary>
          <AccordionDetails>
            Yes, we specialize in assisting startups with business formation,
            intellectual property protection, contract drafting, and compliance
            issues. We understand the unique challenges faced by startups and
            offer customized legal services to support your growth and success
            from the ground up. Our goal is to help startups establish a strong
            legal foundation.
          </AccordionDetails>
        </Accordion>
        <Accordion className="pad-accord-20">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            Does TheSaltLegal handle litigation cases?
          </AccordionSummary>
          <AccordionDetails>
            Yes, we represent clients in various litigation matters, including
            commercial disputes, intellectual property litigation, and corporate
            lawsuits. Our experienced litigators are dedicated to achieving the
            best possible outcomes for our clients through strategic and
            effective advocacy in the courtroom. We are committed to protecting
            your rights and interests in every legal dispute.
          </AccordionDetails>
        </Accordion>
        <Accordion className="pad-accord-20">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            What is TheSaltLegal?
          </AccordionSummary>
          <AccordionDetails>
            TheSaltLegal is a premier law firm specializing in providing
            innovative and comprehensive legal solutions to businesses and
            individuals. We offer expert advice and representation in various
            areas of law, helping clients navigate their legal challenges
            effectively and achieve their goals. Our commitment to excellence
            and client-focused approach sets us apart in the legal industry.
          </AccordionDetails>
        </Accordion>
      </div>
      <div style={{ textAlign: "center", marginTop: "60px" }}>
        <p style={{ fontSize: "22px" }}>
          Buy TSL Toolkit{" "}
          <spa style={{ fontSize: "26px", color: "#000000", fontWeight: 500 }}>
            <del>₹7,999</del>
          </spa>
          <span
            style={{ fontSize: "36px", color: "#000000", fontWeight: "bold" }}
          >
            &nbsp;₹3,499
          </span>
          &nbsp;/year
        </p>

        <div className="center-button">
          <button onClick={handleDownload}>Get Started</button>
        </div>
      </div>
    </div>
  );
}

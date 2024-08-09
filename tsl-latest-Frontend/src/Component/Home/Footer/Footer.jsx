import React from "react";
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faStar,
  faChevronRight,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const scrollToNewsletter = () => {
    const newsSection = document.getElementById("newsLetter");
    if (newsSection) {
      newsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollTocontactform = () => {
    const contactformSection = document.getElementById("contactform");
    if (contactformSection) {
      contactformSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const aboutUsSection = document.getElementById("aboutUs");
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToCategory = () => {
    const categorySection = document.getElementById("Categories");
    if (categorySection) {
      categorySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToDocs = () => {
    const DocsSection = document.getElementById("DocSection");
    if (DocsSection) {
      DocsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToPackage = () => {
    const PackageSection = document.getElementById("packageSection");
    if (PackageSection) {
      PackageSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3 class="footer-heading">THE SALT LEGAL</h3>
          <p class="footer-text">
            We excel in employer-employee disputes, labor law, startup advisory,
            cyberthefts, contracts and intellectual property, providing tailored
            solutions with innovation and excellence....
          </p>
        </div>
        <div class="footer-section">
          <h2 class="footer-heading">USEFUL LINKS</h2>
          <ul class="footer-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a onClick={scrollToCategory}>Features</a>
            </li>
            <li>
              <a onClick={scrollToPackage}>Packages</a>
            </li>
            <li>
              <a onClick={scrollToDocs}>Templates</a>
            </li>
            <li>
              <a onClick={scrollToNewsletter}>Newsletters</a>
            </li>
          </ul>
        </div>
        <div class="footer-section">
          <h3 class="footer-heading">CONNECT WITH US</h3>
          <ul class="footer-links">
            <li>
              <a onClick={() => navigate("/login")}>Login</a>
            </li>
            <li>
              <a onClick={() => navigate("/register")}>Register</a>
            </li>
            <li>
              <a onClick={scrollToCategory}>Category</a>
            </li>
            <li>
              <a onClick={scrollToAbout}>About</a>
            </li>
            <li>
              <a onClick={scrollTocontactform}>Contact</a>
            </li>
          </ul>
        </div>
        <div class="footer-section">
          <h3 class="footer-heading">Follow Us</h3>
          <p>
            <FontAwesomeIcon
              icon={faPhone}
              size="lg"
              style={{ color: "#D0A144", marginRight: "5px" }}
            />
            +91 8130047133
          </p>
          <p>
            <FontAwesomeIcon
              icon={faEnvelope}
              size="lg"
              style={{ color: "#D0A144", marginRight: "5px" }}
            />{" "}
            contact@thesaltlegal.com
          </p>
          <div class="social-icons">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                size="2x"
                style={{ color: "#D0A144", marginRight: "5px" }}
              />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                size="2x"
                style={{ color: "#D0A144", marginRight: "5px" }}
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                style={{ color: "#D0A144", marginRight: "5px" }}
              />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                style={{ color: "#D0A144", marginRight: "5px" }}
              />
            </a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="footer-text">
          COPYRIGHT © 2024 - THE SALT LEGAL - ALL RIGHTS RESERVED.
        </p>
      </div>
    </div>
  );
};

export default Footer;

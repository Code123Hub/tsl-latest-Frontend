import React, { useEffect, useState } from "react";
import "./Navbar.css";
import "../../assets/css/responsive.css";
import { Link, useNavigate } from "react-router-dom";
import Logout from "../Logout.jsx";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check initial auth state from session storage
  const checkAuthState = () => {
    const authStatus = sessionStorage.getItem("authUser") === "true";
    setIsLoggedIn(authStatus);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("authUser"); // Remove user authentication status
    setIsLoggedIn(false); // Update local state
    navigate("/"); // Redirect to home or login page after logout
  };

  useEffect(() => {
    checkAuthState(); // Check auth state on component mount
  }, []);

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
    <>
      <header className="header">
        <a href="#" className="logo">
          <img
            className="logo-stl"
            src="../../src/assets/TSL-logo-new.png"
            alt="Logo"
          />
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu" style={{ paddingRight: "30px" }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link onClick={scrollToCategory}>Category</Link>
          </li>
          <li>
            <Link onClick={scrollToPackage}>Packages</Link>
          </li>
          <li>
            <Link onClick={scrollToDocs}>Templates</Link>
          </li>
          <li>
            <Link onClick={scrollToNewsletter}>Newsletters</Link>
          </li>
          <li>
            <Link onClick={scrollToAbout}>About</Link>
          </li>
          <li>
            <Link style={{ borderRight: "none" }} onClick={scrollTocontactform}>
              Contact Us
            </Link>
          </li>
          {isLoggedIn ? (
            <Logout onLogout={handleLogout} />
          ) : (
            <li className="btn-stl-2" style={{ paddingLeft: "50px" }}>
              <button onClick={() => navigate("/login")}>Sign In</button>
            </li>
          )}
        </ul>
      </header>
    </>
  );
};

export default Navbar;

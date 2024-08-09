import React, { useState, useEffect } from "react";
import "./contactSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Alert, Snackbar, IconButton } from "@mui/material";
import axios from "axios";

export default function ContactSection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const handleDownload = () => {
    navigate("/package");
  };

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const [buttonColor, setButtonColor] = useState("bg-blue-900");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const queryDate = new Date();
    const queryTime = queryDate.toLocaleTimeString();

    console.log(formData);
    try {
      const response = await axios.post("http://localhost:3001/contactUs", {
        ...formData,
        queryDate,
        queryTime,
      });
      console.log(response.data);
      setSnackbarMessage("Query submitted successfully!");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setSnackbarMessage("Failed to submit query. Please try again.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  return (
    <>
      <div
        className="flex flex-col min-h-screen contact-pad-60"
        id="contactform"
      >
        <h2 className="text-cnt">
          <span>Let's Connect !</span>{" "}
        </h2>
        <div className="flex p-4">
          {/* Left Side - Buttons */}
          <div className="w-full md:w-1/3 p-4 ">
            <div className="p-4 rounded-lg shadow-inner shadow-pink-100">
              <h2 className="text-xl font-bold mb-4">Contact Details</h2>
              <p style={{ paddingBottom: "30px" }}>
                We’re here to help! If you have any questions, concerns, or need
                assistance, please don’t hesitate to reach out to us. Here are
                the ways you can get in touch
              </p>
              <div className="flex items-center mb-2">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-gray-500 mr-2"
                />
                <p className="text-gray-700">+91 8130047133</p>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-gray-500 mr-2"
                />
                <p className="text-gray-700">contact@thesaltlegal.com</p>
              </div>
              <div style={{ textAlign: "left", marginTop: "60px" }}>
                <p style={{ fontSize: "22px" }}>
                  Buy TSL Toolkit{" "}
                  <spa
                    style={{
                      fontSize: "26px",
                      color: "#000000",
                      fontWeight: 500,
                    }}
                  >
                    <del>₹7,999</del>
                  </spa>
                  <span
                    style={{
                      fontSize: "36px",
                      color: "#000000",
                      fontWeight: "bold",
                    }}
                  >
                    &nbsp;₹3,499
                  </span>
                  &nbsp;/year
                </p>

                <div
                  className="center-button"
                  style={{ justifyContent: "left" }}
                >
                  <button onClick={handleDownload}>Get Started</button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full md:w-2/3 p-4">
            <div className="font-bold text-center text-white bg-slate-800 px-5 py-4 rounded-lg ">
              Contact Form
            </div>

            <form
              className="mx-auto px-5 py-5 shadow-2xl shadow-slate-300 rounded-2xl"
              onSubmit={handleSubmit}
            >
              <div className="mb-4 ">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2 "
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Email"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Phone Number"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="
               text-white px-4 py-2 rounded-lg font-bold focus:outline-none focus:shadow-outline"
              >
                Send
              </button>
            </form>

            <Snackbar
              open={snackbarOpen}
              autoHideDuration={2000}
              onClose={handleSnackbarClose}
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
              <Alert severity={snackbarSeverity} onClose={handleSnackbarClose}>
                {snackbarMessage}
              </Alert>
            </Snackbar>
          </div>
        </div>
      </div>
    </>
  );
}

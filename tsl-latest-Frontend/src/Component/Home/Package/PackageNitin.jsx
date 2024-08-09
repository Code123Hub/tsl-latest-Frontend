import React from "react";
// import "./packageNitin.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { useRecoilValue, useRecoilState } from "recoil";
import { jwtTokenState, userIdState } from "../../auth/atoms";

function PackageNitin() {
  const navigate = useNavigate();
  const jwtToken = useRecoilValue(jwtTokenState);
  const userId = useRecoilValue(userIdState);
  const [cardDetails, setCardDetails] = useState([]);
  const [book, setbook] = useState({
    name: "The Road to be taken",
    author: "C.S Tylor",
    img: "https://th.bing.com/th?id=OIP.O8X2cM_d8XTou4d3_YlbgAHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    price: 1500,
  });
  const initPayment = (data, title, cardId) => {
    const options = {
      key: "rzp_test_UH0rkDW0Rkm44R",
      amount: data.amount,
      currency: data.currency,
      name: title,
      description: "Test Transaction",
      img: "http://localhost:5173/src/assets/TSL-logo-new.png",
      order_id: data.id,
      handler: async (response) => {
        try {
          console.log("dataishere", jwtToken, userId);
          const verifyUrl = `https://the-salt-legal-backend.onrender.com/verify/${userId}/${cardId}`;
          const token = jwtToken;

          const headers = {
            Authorization: `Bearer ${token}`,
          };

          const { data } = await axios.post(verifyUrl, response, { headers });
          console.log("verifyData", data);
          if (data.status === true) navigate("/category-pay");
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePayment = async (title, id) => {
    try {
      if (jwtToken) {
        console.log(jwtToken);
        console.log("order payment");
        const orderUrl = "https://the-salt-legal-backend.onrender.com/orders";
        const { data } = await axios.post(orderUrl, {
          cardId: id,
        });
        console.log("orderData", data);
        initPayment(data.data, title, id);
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getCardDetails = async () => {
    try {
      const response = await fetch(
        "https://the-salt-legal-backend.onrender.com/getPaymentCard"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log("data", data);
      setCardDetails(data.data);
      console.log("carddetails", cardDetails);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getCardDetails();
  }, []);

  return (
    <div className="pakage-container">
      <h2>
        Choose a <span>Right plan</span> for you
      </h2>
      <p>
        Our template packages are tailored to your needs, with flexible pricing
        for a wide range of pre-written templates that streamline your business
        communication.
      </p>

      {/* <div className="package">
        {cardDetails.map((detail, index) => (
          <div className="package-card">
            <h2>{detail.title}</h2>

            <div style={{ display: "flex", flexDirection: "row" }}>
              <FontAwesomeIcon
                icon={faCheckSquare}
                style={{
                  marginRight: "15px",
                  color: "green",
                  marginTop: "5px",
                }}
              />
              <p>Full Access For 365 days</p>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <FontAwesomeIcon
                icon={faCheckSquare}
                style={{
                  marginRight: "15px",
                  color: "green",
                  marginTop: "5px",
                }}
              />
              <p>Full Access For 365 days</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                textAlign: "center",
              }}
            >
              <FontAwesomeIcon
                icon={faCheckSquare}
                style={{
                  marginRight: "15px",
                  color: "green",
                  marginTop: "5px",
                }}
              />
              <p>Full Access For 365 days</p>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <FontAwesomeIcon
                icon={faCheckSquare}
                style={{
                  marginRight: "15px",
                  color: "green",
                  marginTop: "5px",
                }}
              />
              <p>Full Access For 365 days</p>
            </div>
            <div>
              <h3>Price ₹{detail.price}/ year</h3>
            </div>
            <button onClick={() => handlePayment(detail.title, detail._id)}>
              SELECT
            </button>
          </div>
        ))}
      </div> */}

      <div className="parent-head">
        <div className="cards3">
          <article className="information inner-card">
            <spa className="tag">Feature</spa>
            <h2 className="title">Why Choose TSL?</h2>
            <p className="info">
              <ul>
                <li>Everything You Need in One Place</li>
                <li>Save Time and Money</li>
                <li>Comprehensive Templates Collection</li>
                <li>Seamless Collaboration</li>
                <li>Commitment to Sustainability</li>
                <li>Affordable Pricing</li>
              </ul>
            </p>
            <button className="button">
              <spa>Read more</spa>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="none"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </article>
          <article className="plan inner-card">
            <div className="inner">
              <spa className="pricing">
                <spa>
                  {" "}
                  ₹ 3499 <small>/ y</small>{" "}
                </spa>
              </spa>
              <h2 className="title">Full Pack</h2>
              <p className="info">
                This plan is for those who have a team already and running a
                large business.
              </p>
              <ul className="features">
                <li>
                  <spa className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                        fill="currentColor"
                      />
                    </svg>
                  </spa>
                  <spa>
                    Full Access for <strong>365 Days</strong>
                  </spa>
                </li>
                <li>
                  <spa className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                        fill="currentColor"
                      />
                    </svg>
                  </spa>
                  <spa>Easy Templates Download</spa>
                </li>
                <li>
                  <spa className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                        fill="currentColor"
                      />
                    </svg>
                  </spa>
                  <spa>Dedicated Support</spa>
                </li>
                <li>
                  <spa className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                        fill="currentColor"
                      />
                    </svg>
                  </spa>
                  <spa>Affordable Pricing</spa>
                </li>
              </ul>
              <button
                className="button"
                onClick={() => handlePayment(detail.title, detail._id)}
              >
                Select
              </button>
            </div>
          </article>
          <article className="information inner-card">
            <h2 className="title">
              The only tool you need to schedule your day
            </h2>
            <p className="info">
              Always keep updated with this simple tool on the go, when and
              where ever you need.
            </p>
            <dl className="details">
              <div>
                <dt>Satisfaction</dt>
                <dd>100%</dd>
              </div>
              <div>
                <dt>Customers</dt>
                <dd>4.5K</dd>
              </div>
            </dl>
          </article>
        </div>
      </div>
    </div>
  );
}

export default PackageNitin;

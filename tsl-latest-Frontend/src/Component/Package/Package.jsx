import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Footer from "../Home/Footer/Footer";
import Price from "../Home/Package/Package";
import { Button } from "@mui/material";
import { useRecoilValue } from "recoil";
import { jwtTokenState } from "../auth/atoms";

function Package() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const jwtToken = useRecoilValue(jwtTokenState);
  const [book] = useState({
    name: "The Road to be taken",
    author: "C.S Tylor",
    img: "https://th.bing.com/th?id=OIP.O8X2cM_d8XTou4d3_YlbgAHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    price: 500,
  });

  const initPayment = (data) => {
    const options = {
      key: "rzp_test_UH0rkDW0Rkm44R",
      amount: data.amount,
      currency: data.currency,
      name: book.name,
      description: "Test Transaction",
      img: book.img,
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyUrl =
            "https://the-salt-legal-backend.onrender.com/verify";
          const { data } = await axios.post(verifyUrl, response);
          console.log("verifyData", data);
          if (data.status) {
            // If verification is successful, redirect to CategoryPay
            navigate("/category-pay");
          }
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

  const handleButtonClick = async () => {
    try {
      if (jwtToken) {
        // Decode the JWT token to get user information
        const tokenPayload = JSON.parse(atob(jwtToken.split(".")[1]));

        // Debugging statement to check token payload
        console.log("Token Payload:", tokenPayload);

        // Check if the user is a paid user
        if (tokenPayload.isPaidUser) {
          // Redirect directly to CategoryPay page if paid
          console.log("User is a paid user, redirecting to CategoryPay.");
          navigate("/category-pay");
        } else {
          console.log("Initiating payment process.");
          const orderUrl = "https://the-salt-legal-backend.onrender.com/orders";
          const { data } = await axios.post(orderUrl, {
            amount: book.price,
          });
          console.log("orderData", data);
          initPayment(data.data); // Proceed with payment
        }
      } else {
        navigate("/login");
        console.log("User not logged in. Please login to download.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "10rem" }}>
        {/* Optional content can go here */}
      </div>
      <div>
        <Price />
      </div>
      <div
        style={{ marginTop: "80px", marginBottom: "50px", textAlign: "center" }}
      >
        <span>Get full access with Payment right now </span>
      </div>
      <div className="center-button">
        <Button onClick={handleButtonClick}>SELECT</Button>
      </div>
      <Footer />
    </div>
  );
}

export default Package;

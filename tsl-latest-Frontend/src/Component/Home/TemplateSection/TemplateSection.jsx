import React from "react";
import "./templateSection.css";
import { useNavigate } from "react-router-dom";
import { templateSample } from "../../../Data/templateSample";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
} from "@mui/material";

function TemplateSection() {
  const navigate = useNavigate();

  const handleDownload = () => {
    navigate("/package");
  };

  return (
    <div>
      <h2 class="template-container-h2">
        Discover Our<span> Best-Selling Business Templates! </span>{" "}
      </h2>
      <div className="template-container">
        {templateSample.map((item, index) => (
          <Card key={index} className="template-card-style-1">
            <CardContent>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {/* Wrap the image inside CardMedia */}
                <CardMedia
                  component="img"
                  image={item.img}
                  alt={item.name}
                  style={{ cursor: "pointer" }}
                />
                {/* <Typography variant="body1" style={{ marginTop: "10px" }}>
                  {item.name}
                </Typography> */}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div style={{ textAlign: "center" }}>
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

export default TemplateSection;

import React, { useEffect } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import "./categoryNew.css";
import { categoryData } from "../../../Data/data";

function CategoryNew() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="features-container">
        <h2>
          <span>Our Core Features</span>
        </h2>
        <p>
          At The SALT Legal, our diverse team of legal experts specializes in
          offering in-depth services across various legal domains, including
          Employer-Employee Disputes, Labour Law & Regulations, Privacy Laws,
          Information Technology & Cyber Laws, Startup Advisory, Agreements &
          Disputes, and Intellectual Property.
        </p>
      </div>

      <div className="features-container-2">
        {categoryData.map((item, index) => (
          <Card key={index} className="feature-card-style">
            <CardContent>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <CardMedia>
                  <img src={item.img} style={{ width: "100px" }} />
                </CardMedia>

                <div className="feature-card-style-1">
                  {/* <hr
                  style={{
                   
                    backgroundColor: "gray",
                    height: '2px',width:'180px'
                  }}
                /> */}
                  <Typography
                    variant="h6"
                    component="h2"
                    className="feature-card-style-2"
                    style={{ textAlign: "center" }}
                  >
                    {item.description}
                  </Typography>
                  <hr
                    style={{
                      backgroundColor: "gray",
                      height: "2px",
                      width: "180px",
                    }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CategoryNew;

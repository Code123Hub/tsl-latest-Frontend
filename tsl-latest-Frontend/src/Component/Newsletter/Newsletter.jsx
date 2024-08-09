import { Button, Card, CardContent, Typography } from "@mui/material";
import React, { useEffect } from "react";
import b1 from "../../assets/benefit1.png";
import b2 from "../../assets/benefit2.png";
import b3 from "../../assets/benefit3.png";
import "./Newsletter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookBookmark,
  faBookmark,
  faDownload,
  faShare,
  faShareAltSquare,
  faShareFromSquare,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";

function Newsletter() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="newsletter-container" id="newsLetter">
        <h2 class="template-container-h2">
          Stay Updated<span> with Our Newsletter ! </span>{" "}
        </h2>

        <div className="news-letter-div">
          <img src={b1} />
          <CardContent>
            <h2>IP Strategies for Start-up’s: Secure Your Innovations</h2>
            <p>
              For start-ups, safeguarding intellectual property (IP) is critical
              to maintaining a competitive edge and attracting investors. Here
              are key strategies to secure your innovations:
            </p>
            <br />
            <p>
              <ul>
                <li>
                  <b>Patent Protection:</b> Ensure you patent your inventions to
                  prevent others from using your technology. This includes
                  filing for provisional patents early in your development
                  process.
                </li>
                <li>
                  <b>Trademark you’re Brand:</b> Protect your brand identity by
                  registering trademarks for your company name, logo, and
                  product names.
                </li>
                <li>
                  <b>Trademark you’re Brand: </b>Protect your brand identity by
                  registering trademarks for your company name, logo, and
                  product names.
                </li>
                <li>
                  <b>Confidentiality Agreements:</b>Use Non-Disclosure
                  Agreements (NDAs) with employees, partners, and contractors to
                  protect your sensitive information.
                </li>
                <li>
                  <b>Monitor and Enforce IP Rights: </b>Regularly monitor the
                  market for potential infringements and take legal action if
                  necessary to protect your IP.
                </li>
                <li>
                  <b>Educate Your Team:</b>Ensure your team understands the
                  importance of IP protection and follows best practices.
                </li>
              </ul>
            </p>
            <br />
            <p>
              By implementing these strategies, start-ups can secure their
              innovations and build a strong foundation for growth and success.
              For more details on IP protection, visit thesaltlegal today!
            </p>
          </CardContent>
        </div>
        <div className="news-letter-div">
          <CardContent>
            <h2>10 Must-Know labour Law Trends for This Year</h2>
            <p>
              Staying abreast of the latest labour law trends is crucial for
              businesses to ensure compliance and foster a fair workplace. Here
              are ten must-know labour law trends for this year:
            </p>
            <br />
            <p>
              <ul>
                <li>
                  <b>Remote Work Regulations:</b> With remote work becoming the
                  norm, new laws are emerging to address home office expenses,
                  data security, and employee rights.
                </li>
                <li>
                  <b>Wage Transparency:</b> Increasingly, laws require employers
                  to disclose wage ranges in job postings to promote pay equity.
                </li>
                <li>
                  <b>Anti-Discrimination Policies: </b>Enhanced protections
                  against discrimination based on race, gender, and sexual
                  orientation are being implemented.
                </li>
                <li>
                  <b>Worker Classification:</b>Clearer definitions of employee
                  vs. independent contractor status are being enforced to
                  prevent misclassification.
                </li>
                <li>
                  <b>Workplace Safety:</b>Post-pandemic, there’s a greater
                  emphasis on health and safety regulations, including mental
                  health considerations.
                </li>
                <li>
                  <b>Family Leave Expansions:</b>More jurisdictions are
                  expanding paid family and medical leave benefits.
                </li>
              </ul>
              <br />
              <p>
                Understanding these trends helps businesses adapt to legal
                changes and create a compliant, equitable workplace.
              </p>
            </p>
          </CardContent>
          <img src={b2} />
        </div>
        <div className="news-letter-div">
          <img src={b3} />
          <CardContent>
            <h2>
              What Are the Latest Cyber Law Trends and How Can You Stay
              Protected?
            </h2>
            <p>
              In today’s digital age, staying updated on cyber law trends is
              essential for safeguarding your business. Here are the latest
              trends and tips for protection:
            </p>
            <br />
            <p>
              <ul>
                <li>
                  <b>Data Privacy Regulations:</b> Compliance with laws like
                  GDPR and CCPA is crucial. Regularly update your privacy
                  policies and ensure robust data protection measures.
                </li>
                <li>
                  <b>Cyber security Requirements:</b> New laws mandate stricter
                  cyber security protocols. Implement comprehensive security
                  strategies, including firewalls, encryption, and regular
                  audits.
                </li>
                <li>
                  <b>Incident Reporting: Anti-Discrimination Policies: </b>
                  Promptly report data breaches to authorities and affected
                  individuals to comply with legal requirements.
                </li>
                <li>
                  <b>Third-Party Risk Management:</b> Ensure that your partners
                  and vendors adhere to cyber security standards to prevent
                  breaches.
                </li>
                <li>
                  <b>Employee Training:</b> Conduct regular training sessions to
                  educate employees about cyber threats and safe practices.
                </li>
              </ul>
              <br />
              <p>
                By understanding these trends and implementing protective
                measures, your business can navigate the complex landscape of
                cyber law and minimize risks. Stay informed and proactive to
                ensure compliance and security
              </p>
            </p>
          </CardContent>
        </div>
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <p>
            Buy TSL Toolkit{" "}
            <spa
              style={{ fontSize: "22px", color: "#000000", fontWeight: 500 }}
            >
              <del>₹7,999</del>
            </spa>
            <span
              style={{ fontSize: "36px", color: "#000000", fontWeight: "bold" }}
            >
              &nbsp;₹3,499
            </span>
            &nbsp;/year
          </p>
          <span
            style={{ fontSize: "22px", color: "#000000", fontWeight: 500 }}
          ></span>

          <div className="center-button">
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;

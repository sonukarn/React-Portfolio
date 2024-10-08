import "./Footer.css";
import React from "react";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>H2 KunwarSingh nagar Nangloi Delhi.</p>
              <p>India.</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              7678676562
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              s.sonukarn.1996@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About the company</h4>
          <p>
            This is me Sonu kumar . CEO & Founder of SonuWebTechnical. I enjoy
            discussing new projects and design challenges.
          </p>
          <div className="social">
            <Link
              to={"//https://www.facebook.com/sonu.karn.1232"}
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </Link>
            <Link to={""}>
              <FaTwitter
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </Link>
            <Link to={"//www.linkedin.com/in/sonuwebtechnical"} target="_blank">
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import "./Heroimg.css";
import React from "react";
import introImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";
const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img src={introImg} alt="introImg" className="into-img" />
      </div>
      <div className="content">
        <p>HI, I'M A SONU KUMAR.</p>
        <h1>React Developer.</h1>
        <div>
          <Link to="/project" className="btn">
            PROJECTS
          </Link>
          <Link to="/contact" className="btn-light btn">
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;

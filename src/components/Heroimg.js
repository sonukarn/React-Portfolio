import "./Heroimg.css";
import React from "react";
import introImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";
import TypingEffect from "./typeEffect/TypingEffect";
const Heroimg = () => {
  const words = ["Mern Developer", "React Developer."];
  return (
    <div className="hero">
      <div className="mask">
        <img src={introImg} alt="introImg" className="into-img" />
      </div>
      <div className="content">
        <p>HI, I'M A SONU KUMAR.</p>
        <h1>
          <TypingEffect words={words} speed={100} pauseTime={2000} />
        </h1>
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

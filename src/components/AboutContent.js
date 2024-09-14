import "./AboutContent.css";
import React from "react";
import { Link } from "react-router-dom";
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.webp";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          Im a react font-end developer. I create responsive secure websites for
          my clients. working as FrontEnd Developer from the last 1 years in web
          technologies. I am extremely proficient in Front-End Development apart
          from Front-End. I am quite well in Back-End using Node js MongoDB as
          well as in designing using Adobe Photoshop, and continuously engage in
          trying to extend my skills with new technology. Feel free to explore
          the rest of my page as I hope you enjoy reading it as much as I have
          enjoyed creating it!
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="image-container">
          <div className="img-stack top">
            <img src={React1} alt="imageReact" className="img" />
          </div>
          <div className="img-stack bottom">
            <img src={React2} alt="imageReact2" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;

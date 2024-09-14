import React from "react";
import Navbar from "../components/Navbar";
import Heroimage from "../components/Heroimage";
import Footer from "../components/Footer";
import AboutContent from "../components/AboutContent";
const About = (props) => {
  return (
    <div>
      <Navbar />
      <Heroimage
        heading="I m Sonu Kumar"
        text="I am Freelancer and React Developer"
      />
      <AboutContent />
    </div>
  );
};

export default About;

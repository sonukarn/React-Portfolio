import React from "react";
import PriceCard from "../components/PriceCard";
import Navbar from "../components/Navbar";
import "../index.css";
import { FaGraduationCap } from "react-icons/fa";
import Heroimage from "../components/Heroimage";

const Education = () => {
  return (
    <div>
      <Navbar />
      <Heroimage
        heading="Education Qualification."
        text="My Acadmic Qualifications"
      />
      <h1 className="project-heading">
        <FaGraduationCap className="education" />
        Education
      </h1>

      <PriceCard />
    </div>
  );
};

export default Education;

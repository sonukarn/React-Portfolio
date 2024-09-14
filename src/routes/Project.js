import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimage from "../components/Heroimage";
import Work from "../components/Work";
const Project = (props) => {
  return (
    <div>
      <Navbar />
      <Heroimage heading="PROJECTS." text="Some of my most recent works" />
      <Work />

      <Footer />
    </div>
  );
};

export default Project;

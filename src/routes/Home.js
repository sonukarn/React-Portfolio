import React from "react";
import Navbar from "../components/Navbar";
import Heroimg from "../components/Heroimg";
import Footer from "../components/Footer";
import Work from "../components/Work";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Heroimg />
      <About />
      <Skills />
      <Education />
      <Work />
      <Footer />
    </div>
  );
};

export default Home;

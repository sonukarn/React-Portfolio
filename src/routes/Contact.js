import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimage from "../components/Heroimage";
import Form from "../components/Form";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <Heroimage
        heading="Feel Free To Contact Us"
        text="I am friendly Front-End Developer"
      />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;

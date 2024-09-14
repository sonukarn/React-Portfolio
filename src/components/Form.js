import "./Form.css";
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    emailjs
      .sendForm("service_3ed0ddh", "template_xnewhg6", form.current, {
        publicKey: "8T7rVlKaHyVya3V0n",
      })
      .then((res) => {
        console.log("Email sent successfully!", res.status);
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.log("Error sending email!", error);
      });
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  // Use useEffect to handle redirection after 5 seconds
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        navigate("/"); // Redirect to home page after 5 seconds
      }, 5000);

      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [isSubmitted, navigate]);
  return (
    <div className="form">
      {!isSubmitted ? (
        <form ref={form} onSubmit={handleSubmit}>
          <label htmlFor="">Your Name</label>
          <input
            type="text"
            name="name"
            id=""
            value={formData.name}
            onChange={handleInput}
          />
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            id=""
            value={formData.email}
            onChange={handleInput}
          />
          <label htmlFor="">Subject</label>
          <input
            type="text"
            name="subject"
            id=""
            value={formData.subject}
            onChange={handleInput}
          />
          <label htmlFor="">Message</label>
          <textarea
            name="message"
            value={formData.message}
            placeholder="Type your message here"
            onChange={handleInput}
            rows="6"
          ></textarea>
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      ) : (
        <div className="success-message">
          <h3>Thank you! Your message has been sent successfully.</h3>
          <p>You will be redirected to the homepage in 5 seconds...</p>
        </div>
      )}
    </div>
  );
};

export default Form;

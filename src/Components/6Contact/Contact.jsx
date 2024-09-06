import axios from "axios";
import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const googleScriptURL = "https://script.google.com/macros/s/AKfycbzpBO5lJH-6fNQKAjtprAsGNVSns91zn7Las2m0uM31uXrDXgRSjtBOAwQTqvlRZ2S8/exec"; 
    // Replace with your actual Google Script URL (this is added to muhammadimran as ReactPortfolioContactUs)

    try {
      const encodedData = new URLSearchParams(formData).toString();

      await axios.post(googleScriptURL, encodedData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      alert("There was an error sending your message.");
      console.error(error);
    }
  };

  return (
    <section className="contact-section" id="Contact">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>
          We're here to help and answer any question you might have. We look forward to hearing from you.
        </p>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </section>
  );
}

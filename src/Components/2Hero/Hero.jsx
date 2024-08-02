// Hero.jsx
import React from "react";
import "./Hero.css"; // Import the CSS file
import {
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <div className="hero-circle">
          <img
            src="https://via.placeholder.com/400x600" // Replace with your standing image URL
            alt="Standing"
            className="hero-image"
          />
        </div>
      </div>
      <div className="hero-right">
        <h1 className="hero-title">
          Welcome to Your Professional Hero Section
        </h1>
        <p className="hero-subtitle">Delivering excellence in every pixel.</p>
        <button className="hero-cta-button">Download CV</button>
        <div className="hero-social-icons">
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-icon"
          >
            <FaGithub />
          </a>
          <a
            href="https://instagram.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-icon"
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-icon"
          >
            <FaYoutube />
          </a>
          <a
            href="https://twitter.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-icon"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-icon"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

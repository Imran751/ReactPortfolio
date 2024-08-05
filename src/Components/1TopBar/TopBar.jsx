import React from "react";
import { FaPhone, FaEnvelope, FaBars } from "react-icons/fa";
import "./TopBar.css"; // Import the CSS file

const TopBar = () => {
  return (
    <div className="container">
      <div className="left">
        <a className="logo" href="#Hero">
          .imran
        </a>
      </div>
      <div className="center">
        <div className="phone">
          <FaPhone className="icon" /> <span>+92 300 6509123</span>
        </div>
        <div className="email">
          <FaEnvelope className="icon" />{" "}
          <span>muhammadimranjhang@gmail.com</span>
        </div>
        <span className="promo">10% off on first order.</span>
      </div>
      <div className="right">
        <img
          src="https://via.placeholder.com/40"
          alt="User"
          className="userImage"
        />
      </div>
      <div className="hamburger-container">
        <FaBars className="hamburger" />
      </div>
    </div>
  );
};

export default TopBar;

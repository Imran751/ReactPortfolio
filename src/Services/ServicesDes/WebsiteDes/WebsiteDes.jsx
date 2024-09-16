import React from "react";
// import { useNavigate } from "react-router-dom";
import "./WebsiteDes.css";

export default function WebsiteDes() {
  // const navigate = useNavigate();

  // const handleNavigate = () => {
  //   navigate("/website");
  // };

  return (
    <div className="WebsiteDes" id="WebsiteDes">
      <div className="website-page-container">
        <div className="website-page-content">
          <h2>Explore My Website Designs</h2>
          <p>
            Thank you for exploring. <br />Have a look at some of my stunning
            website projects. I focus on clean, functional, and creative designs
            to give your brand a unique presence online. Let's work together to
            bring your ideas to life.
          </p>

          <div className="theButtons">
            {/* Button for Calendly Appointment */}
            <div className="calendly-button-container">
              <a href="https://calendly.com/muhammadimranjhang/30min" target="_blank" rel="noopener noreferrer">
                <button className="calendly-button">Book an Appointment</button>
              </a>
            </div>
            {/* <div className="LearnBtnContainer">
              <button onClick={handleNavigate} className="cta-button">
                Learn More&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;&gt;&gt;
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

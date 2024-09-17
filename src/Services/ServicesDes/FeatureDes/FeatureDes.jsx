import React from "react";
// import { useNavigate } from "react-router-dom";
import "./FeatureDes.css";

export default function FeatureDes() {
  // const navigate = useNavigate();

  // const handleNavigate = () => {
  //   navigate("/features");
  // };

  return (
    <div className="FeatureDes" id="FeatureDes">
      <div className="feature-page-container">
        {/* Removed the video container */}
        <div className="feature-page-content">
          <h2>Explore My Work</h2>
          <p>
            Check out some of my standout projects
            above. From concept to completion, I bring a creative touch and a
            commitment to excellence. Let's collaborate and make something
            extraordinary together.
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

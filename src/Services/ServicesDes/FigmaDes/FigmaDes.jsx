import React from "react";
// import { useNavigate } from "react-router-dom";
import "./FigmaDes.css";

export default function FigmaDes() {
  // const navigate = useNavigate();

  // const handleNavigate = () => {
  //   navigate("/figma"); 
  // };

  return (
    <div className="FigmaDes" id="FigmaDes">
      <div className="figma-page-container">
        <div className="figma-page-content">
          <h2>Explore My Figma Designs</h2>
          <p>
            From wireframes to final
            designs, I aim to create intuitive and visually appealing user
            interfaces. Let's collaborate and bring your ideas to life through
            design.
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

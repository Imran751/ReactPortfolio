import React from "react";
// import { useNavigate } from "react-router-dom";
import "./AppDec.css";

export default function AppDec() {
  // const navigate = useNavigate();

  // const handleNavigate = () => {
  //   navigate("/web-app");
  // };

  return (
    <div className="AppDec" id="AppDec">
      <div className="app-page-container">
        <div className="app-page-content">
          <h2>Explore My App Develpment Skills</h2>
          <p>
            Each app is crafted with attention to detail and a focus on user experience.
            Let’s build innovative solutions together.
          </p>

          <div className="theButtons">
            <div className="calendly-button-container">
              <a
                href="https://calendly.com/muhammadimranjhang/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
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

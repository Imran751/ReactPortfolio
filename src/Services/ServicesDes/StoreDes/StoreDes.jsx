import React from "react";
// import { useNavigate } from "react-router-dom";
import "./StoreDes.css";

export default function StoreDes() {
  // const navigate = useNavigate();

  // const handleNavigate = () => {
  //   navigate("/store"); // Navigate to the store page
  // };

  return (
    <div className="StoreDes" id="StoreDes">
      <div className="store-page-container">
        <div className="store-page-content">
          <h2>Explore Our Store</h2>
          <p>
            Discover a wide range of products that cater to your needs and preferences. <br />
            From unique finds to everyday essentials, our store has something for everyone. Explore our offerings and find what you're looking for.
          </p>

          <div className="theButtons">
            {/* Button for Book Appointment */}
            <div className="calendly-button-container">
              <a href="https://calendly.com/your-appointment" target="_blank" rel="noopener noreferrer">
                <button className="cta-button">Book an Appointment</button>
              </a>
            </div>
            {/* Button for Learn More */}
            {/* <div className="learn-more-button-container">
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

import React from "react";
// import { useNavigate } from "react-router-dom";
import "./AssetDes.css"; // Ensure you create this CSS file similar to others

export default function AssetDes() {
  // const navigate = useNavigate();

  // const handleNavigate = () => {
  //   navigate("/assets"); // Adjust the route as needed
  // };

  return (
    <div className="AssetDes" id="AssetDes">
      <div className="asset-page-container">
        <div className="asset-page-content">
          <h2>Explore My Digital Assets</h2>
          <p>
            Discover a collection of assets designed with creativity and
            functionality in mind. From unique graphics to practical resources,
            you'll find the perfect complement to your next project.
          </p>

          <div className="theButtons">
            {/* Button for Calendly Appointment */}
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

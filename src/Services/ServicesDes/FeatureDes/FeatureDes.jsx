import React from "react";
import { useNavigate } from "react-router-dom";
import "./FeatureDes.css";

export default function FeatureDes() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/features'); // Navigate to the features page
  };

  return (
    <div className="FeatureDes" id="FeatureDes">
      <div className="feature-page-content">
        <h2>Explore My Work</h2>
        <p>
          Thank you for visiting. Check out some of my standout projects above.
          From concept to completion, I bring a creative touch and a commitment
          to excellence. Let's collaborate and make something extraordinary
          together.
        </p>

        <div className="cta-button-container">
          <a href="#Contact" className="cta-button">
            Book a Consultation
          </a>
        </div>
        <div className="cta-button-container">
        <button onClick={handleNavigate} className="cta-button">
  Learn More&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;&gt;&gt;
</button>

        </div>
      </div>
    </div>
  );
}

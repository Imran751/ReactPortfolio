import React from "react";
import "./FeaturePage.css";

export default function FeaturePage() {
  return (
    <div className="FeaturePage" id="FeaturePage">
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
      </div>
    </div>
  );
}

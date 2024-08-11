import React from "react";
import { useNavigate } from "react-router-dom";
import "./FeaturePage.css";

export default function FeaturePage() {
  const navigate = useNavigate();

  return (
    <div className="feature-page">
      <div className="feature-page-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          <img src={require("../../Assets/down.png")} alt="Back" className="back-button-image" />
        </button>
        <h1>Our Features</h1>
      </div>

      <div className="feature-page-content">
        <div className="feature">
          <h2>Feature 1</h2>
          <p>
            Detailed description of Feature 1, highlighting its benefits and how it adds value to the product or service.
          </p>
        </div>

        <div className="feature">
          <h2>Feature 2</h2>
          <p>
            Detailed description of Feature 2, explaining its functionality and why it's important for users.
          </p>
        </div>

        <div className="feature">
          <h2>Feature 3</h2>
          <p>
            Detailed description of Feature 3, providing insights into its design and usability.
          </p>
        </div>
      </div>
    </div>
  );
}

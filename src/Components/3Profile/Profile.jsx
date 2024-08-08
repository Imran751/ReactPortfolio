import React from "react";
import "./Profile.css";

export default function Profile() {
  const categories = ["feature", "figma", "website", "assets", "store"];

  return (
    <div className="Profile" id="Profile">
      <div className="category-container">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            {category}
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useState, useRef } from "react";
import "./CategoryContainer.css";

export default function CategoryContainer({ setActiveSection }) {
  const categories = ["Feature", "Figma", "Website", "Assets", "Store"];
  const [activeCategory, setActiveCategory] = useState("Feature");
  const containerRef = useRef(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setActiveSection(category); // Update the active section
  };

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="category-wrapper">
      <button className="scroll-button left" onClick={scrollLeft}>
        &lt;
      </button>
      <div className="category-container" ref={containerRef}>
        {categories.map((category, index) => (
          <div
            key={index}
            className={`category-item ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </div>
        ))}
      </div>
      <button className="scroll-button right" onClick={scrollRight}>
        &gt;
      </button>
    </div>
  );
}

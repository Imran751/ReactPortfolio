import React, { useState } from "react";
import "./Works.css";

// Import your images
import Image1 from "../../Assets/FeatureImages/Coconut Oil.png";
import Image2 from "../../Assets/FeatureImages/Home-made Cookies.png";
import Image3 from "../../Assets/FeatureImages/Honey Shampoo.png";
import Image4 from "../../Assets/FeatureImages/Kitchen Knife.png";
import Image5 from "../../Assets/FeatureImages/Laptop.png";
import Image6 from "../../Assets/FeatureImages/MenShirt.png";
import Image7 from "../../Assets/FeatureImages/Mobile.png";
import Image8 from "../../Assets/FeatureImages/Nike Shoes.png";

export default function FeatureImage({ setActiveSection }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define the categories with image sources and descriptions
  const categories = [
    { name: "Coconut Oil", image: Image1, description: "Organic coconut oil for cooking and skincare." },
    { name: "Home-made Cookies", image: Image2, description: "Delicious and freshly baked home-made cookies." },
    { name: "Honey Shampoo", image: Image3, description: "Natural honey shampoo for soft and shiny hair." },
    { name: "Kitchen Knife", image: Image4, description: "Professional kitchen knife for precise cutting." },
    { name: "Laptop", image: Image5, description: "High-performance laptop for all your computing needs." },
    { name: "Men's Shirt", image: Image6, description: "Stylish and comfortable men's shirt for any occasion." },
    { name: "Mobile Phone", image: Image7, description: "Latest smartphone with cutting-edge technology." },
    { name: "Nike Shoes", image: Image8, description: "Comfortable and stylish Nike shoes for everyday wear." },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? categories.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === categories.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="feature-image-section">
      <div className="feature-image-header">
        <h2>My Projects</h2>
      </div>
      <div className="feature-image-slider">
        <button className="slider-button left" onClick={handlePrev}>
          &lt;
        </button>
        <div className="slider-content">
          <div className="media">
            <img src={categories[currentIndex].image} alt={categories[currentIndex].name} />
          </div>
          <div className="description">
            <h3>{categories[currentIndex].name}</h3>
            <p>{categories[currentIndex].description}</p>
            <button 
              className="learn-more-button" 
              onClick={() => setActiveSection(categories[currentIndex].name)}>
              Learn More
            </button>
          </div>
        </div>
        <button className="slider-button right" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
  );
}

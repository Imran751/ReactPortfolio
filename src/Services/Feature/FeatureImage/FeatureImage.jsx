import React, { useRef } from "react";
import "./FeatureImage.css";

// Import your images
import FeatureImage1 from "../../../Assets/Services/Coconut Oil.png";
import FeatureImage2 from "../../../Assets/Services/Home-made Cookies.png";
import FeatureImage3 from "../../../Assets/Services/Honey Shampoo.png";
import FeatureImage4 from "../../../Assets/Services/Kitchen Knife.png";
import FeatureImage5 from "../../../Assets/Services/Laptop.png";
import FeatureImage6 from "../../../Assets/Services/MenShirt.png";
import FeatureImage7 from "../../../Assets/Services/Mobile.png";
import FeatureImage8 from "../../../Assets/Services/Nike Shoes.png";

export default function FeatureImageContainer({ setActiveSection }) {
  // Define the categories with image sources
  const categories = [
    { name: "Image1", image: FeatureImage1 },
    { name: "Image2", image: FeatureImage2 },
    { name: "Image3", image: FeatureImage3 },
    { name: "Image4", image: FeatureImage4 },
    { name: "Image5", image: FeatureImage5 },
    { name: "Image6", image: FeatureImage6 },
    { name: "Image7", image: FeatureImage7 },
    { name: "Image8", image: FeatureImage8 },
  ];

  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({
      left: -containerRef.current.clientWidth / 2,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({
      left: containerRef.current.clientWidth / 2,
      behavior: "smooth",
    });
  };

  return (
    <div className="FeatureImage-wrapper">
      <button className="scroll-button left" onClick={scrollLeft}>
        &lt;
      </button>
      <div className="FeatureImage-container" ref={containerRef}>
        {categories.map((FeatureImage, index) => (
          <div key={index} className="FeatureImage-item">
            <img src={FeatureImage.image} alt={FeatureImage.name} />
          </div>
        ))}
      </div>
      <button className="scroll-button right" onClick={scrollRight}>
        &gt;
      </button>
    </div>
  );
}

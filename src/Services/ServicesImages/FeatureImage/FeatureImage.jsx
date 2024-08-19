import React, { useRef } from "react";
import "./FeatureImage.css";

// Import your images
import Image1 from "../../../Assets/FeatureImages/Coconut Oil.png";
import Image2 from "../../../Assets/FeatureImages/Home-made Cookies.png";
import Image3 from "../../../Assets/FeatureImages/Honey Shampoo.png";
import Image4 from "../../../Assets/FeatureImages/Kitchen Knife.png";
import Image5 from "../../../Assets/FeatureImages/Laptop.png";
import Image6 from "../../../Assets/FeatureImages/MenShirt.png";
import Image7 from "../../../Assets/FeatureImages/Mobile.png";
import Image8 from "../../../Assets/FeatureImages/Nike Shoes.png";

export default function FeatureImage({ setActiveSection }) {
  // Define the categories with image sources
  const categories = [
    { name: "Image1", image: Image1 },
    { name: "Image2", image: Image2 },
    { name: "Image3", image: Image3 },
    { name: "Image4", image: Image4 },
    { name: "Image5", image: Image5 },
    { name: "Image6", image: Image6 },
    { name: "Image7", image: Image7 },
    { name: "Image8", image: Image8 },
  ];

  const containerRef = useRef(null);
  const itemRefs = useRef([]);

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

  const focusImage = (index) => {
    if (itemRefs.current[index]) {
      itemRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  return (
    <div className="FeatureImage-wrapper">
      <button className="scroll-button lefts" onClick={scrollLeft}>
        &lt;
      </button>
      <div className="FeatureImage-container" ref={containerRef}>
        {categories.map((FeatureImage, index) => (
          <div
            key={index}
            className="FeatureImage-item"
            ref={(el) => (itemRefs.current[index] = el)}
            onClick={() => focusImage(index)}
          >
            <img src={FeatureImage.image} alt={FeatureImage.name} />
          </div>
        ))}
      </div>
      <button className="scroll-button rights" onClick={scrollRight}>
        &gt;
      </button>
    </div>
  );
}

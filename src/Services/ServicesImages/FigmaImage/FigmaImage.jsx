import React, { useRef } from "react";
import "./FigmaImage.css";

// Import your images
import Image8 from "../../../Assets/FigmaImages/Nike Shoes.png";
import Image1 from "../../../Assets/FigmaImages/Coconut Oil.png";
import Image4 from "../../../Assets/FigmaImages/Kitchen Knife.png";
import Image2 from "../../../Assets/FigmaImages/Home-made Cookies.png";
import Image3 from "../../../Assets/FigmaImages/Honey Shampoo.png";
import Image5 from "../../../Assets/FigmaImages/Laptop.png";
import Image6 from "../../../Assets/FigmaImages/MenShirt.png";
import Image7 from "../../../Assets/FigmaImages/Mobile.png";

export default function FigmaImage({ setActiveSection }) {
  // Define the categories with image sources
  const categories = [
    { name: "Image8", image: Image8 },
    { name: "Image1", image: Image1 },
    { name: "Image2", image: Image2 },
    { name: "Image3", image: Image3 },
    { name: "Image4", image: Image4 },
    { name: "Image5", image: Image5 },
    { name: "Image6", image: Image6 },
    { name: "Image7", image: Image7 },
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
    <div className="FigmaImage-wrapper">
      <button className="scroll-button lefts" onClick={scrollLeft}>
        &lt;
      </button>
      <div className="FigmaImage-container" ref={containerRef}>
        {categories.map((FigmaImage, index) => (
          <div key={index} className="FigmaImage-item">
            <img src={FigmaImage.image} alt={FigmaImage.name} />
          </div>
        ))}
      </div>
      <button className="scroll-button rights" onClick={scrollRight}>
        &gt;
      </button>
    </div>
  );
}

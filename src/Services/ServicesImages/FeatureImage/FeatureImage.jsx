import React, { useState, useEffect, useRef } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../../../Components/Firebase"; // Adjust the path to your Firebase config
import "./FeatureImage.css";

export default function FeatureImage({ setActiveSection }) {
  const [categories, setCategories] = useState([]);
  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  // Fetch images from Firebase Storage
  useEffect(() => {
    const storageRef = ref(storage, "FeatureImages/"); // Folder name as "FeatureImages"
    const fetchImages = async () => {
      try {
        const result = await listAll(storageRef);
        const imagePromises = result.items.map((imageRef) =>
          getDownloadURL(imageRef)
        );
        const imageUrls = await Promise.all(imagePromises);
        const imageData = imageUrls.map((url, index) => ({
          name: `Image${index + 1}`,
          image: url,
        }));
        setCategories(imageData);
      } catch (error) {
        console.error("Error fetching images from Firebase:", error);
      }
    };

    fetchImages();
  }, []);

  // Scroll functions
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
        {categories.length > 0 ? (
          categories.map((FeatureImage, index) => (
            <div
              key={index}
              className="FeatureImage-item"
              ref={(el) => (itemRefs.current[index] = el)}
              onClick={() => focusImage(index)}
            >
              <img src={FeatureImage.image} alt={FeatureImage.name} />
            </div>
          ))
        ) : (
          <p>Loading images...</p>
        )}
      </div>
      <button className="scroll-button rights" onClick={scrollRight}>
        &gt;
      </button>
    </div>
  );
}

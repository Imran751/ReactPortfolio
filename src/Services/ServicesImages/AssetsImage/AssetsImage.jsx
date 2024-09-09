import React, { useState, useEffect, useRef } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../../../Components/Firebase";
import "./AssetsImage.css";

export default function AssetsImage({ setActiveSection }) {
  const [categories, setCategories] = useState([]);
  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  // Fetch images from Firebase Storage
  useEffect(() => {
    const storageRef = ref(storage, "Assets/"); // Adjust folder name as needed
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
    <div className="AssetsImage-wrapper">
      <button className="scroll-button lefts" onClick={scrollLeft}>
        &lt;
      </button>
      <div className="AssetsImage-container" ref={containerRef}>
        {categories.length > 0 ? (
          categories.map((AssetsImage, index) => (
            <div
              key={index}
              className="AssetsImage-item"
              ref={(el) => (itemRefs.current[index] = el)}
              onClick={() => focusImage(index)}
            >
              <img src={AssetsImage.image} alt={AssetsImage.name} />
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

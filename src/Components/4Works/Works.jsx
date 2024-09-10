import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Components/Firebase"; // Adjust the import path for Firebase configuration
import "./Works.css";

export default function WorksImage({ setActiveSection }) {
  const [categories, setCategories] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true); // Handle loading state

  // Fetch images and data from Firestore
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const collectionRef = collection(db, "MyProjects");
        const snapshot = await getDocs(collectionRef);
        const imageData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        setCategories(imageData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching images from Firestore:", error);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

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
    <div className="Works-image-section" id="Works">
      <div className="Works-image-header">
        <h2>My Projects</h2>
      </div>

      {loading ? (
        <p>Loading images...</p>
      ) : (
        <div className="Works-image-slider">
          <button className="slider-button left" onClick={handlePrev}>
            &lt;
          </button>

          <div className="slider-content">
            <div className="media">
              <img
                src={categories[currentIndex]?.image}
                alt={categories[currentIndex]?.name}
              />
            </div>
            <div className="description">
              <h3>{categories[currentIndex]?.name}</h3>
              <p>{categories[currentIndex]?.description}</p>
              {/* <button
                className="learn-more-button"
                onClick={() => setActiveSection(categories[currentIndex]?.name)}
              >
                Learn More
              </button> */}
            </div>
          </div>

          <button className="slider-button right" onClick={handleNext}>
            &gt;
          </button>
        </div>
      )}
    </div>
  );
}

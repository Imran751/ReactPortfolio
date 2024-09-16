import React, { useState, useEffect, useRef } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { storage } from "../../Components/Firebase";
import "./FigmaPage.css";

export default function FigmaPage() {
  const [categories, setCategories] = useState([]);
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const navigate = useNavigate(); // For back button navigation

  // Function to determine if the file is a video based on its extension
  const isVideo = (url) => {
    const videoExtensions = [".mp4", ".webm", ".ogg", ".avi", ".mov"];
    return videoExtensions.some((ext) => url.toLowerCase().endsWith(ext));
  };

  // Fetch images and videos from Firebase Storage
  useEffect(() => {
    const storageRef = ref(storage, "Figma/"); // Replace with your Firebase storage folder

    const fetchMedia = async () => {
      try {
        const result = await listAll(storageRef); // Get all media references
        const mediaPromises = result.items.map((mediaRef) =>
          getDownloadURL(mediaRef) // Get download URLs for each file
        );
        const mediaUrls = await Promise.all(mediaPromises);

        const mediaData = mediaUrls.map((url, index) => {
          const headlines = [
            "Watch me live in Action",
            "Innovative Mobile App UI",
            "Modern Website Design",
            "High-Converting Landing Pages",
            "User-Friendly Admin Panels",
            "Creative Web Applications",
            "Dynamic Dashboard Interfaces",
            "Engaging E-Commerce Sites",
            "Responsive Mobile Designs",
            "Creative Portfolio Displays",
            "Efficient Project Management Tools",
          ];

          const texts = [
            "This video explains my way of working.",
            "Explore our creative mobile app designs that ensure a seamless user experience on any device.",
            "Enhance your online presence with our website designs tailored to your brand.",
            "Maximize your lead generation with our crafted landing pages.",
            "Manage data efficiently with easy-to-navigate admin panels.",
            "Custom web applications that combine design and functionality.",
            "Monitor data with dynamic dashboard designs.",
            "Boost your online sales with our e-commerce website designs.",
            "Reach your audience on-the-go with responsive mobile designs.",
            "Showcase your work with creative portfolio displays.",
            "Streamline workflow with efficient project management tools.",
          ];

          return {
            name: `Media${index + 1}`,
            mediaUrl: url,
            isVideo: isVideo(url),
            headline: headlines[index % headlines.length], // Use modulo to cycle through headlines
            text: texts[index % texts.length], // Use modulo to cycle through texts
          };
        });

        setCategories(mediaData); // Update the state with fetched media
      } catch (error) {
        console.error("Error fetching media from Firebase:", error);
      }
    };

    fetchMedia();
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

  const focusMedia = (index) => {
    if (itemRefs.current[index]) {
      itemRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  return (
    <div className="FigmaPage-wrapper">
      {/* Header with Back Button */}
      <div className="feature-page-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          <img
            src={require("../../Assets/down.png")}
            alt="Back"
            className="back-button-image"
          />
        </button>
        <h1>My Figma Designs</h1>
      </div>

      <button className="scroll-button lefts" onClick={scrollLeft}>
        &lt;
      </button>

      <div className="FigmaPage-container" ref={containerRef}>
        {categories.length > 0 ? (
          categories.map((item, index) => (
            <div
              key={index}
              className="FigmaPage-item"
              ref={(el) => (itemRefs.current[index] = el)}
              onClick={() => focusMedia(index)}
            >
              {item.isVideo ? (
                <video controls className="FigmaPage-video">
                  <source src={item.mediaUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={item.mediaUrl}
                  className="FigmaPage-image"
                  alt={item.headline}
                />
              )}
              <div className="FigmaPage-text">
                <h2>{item.headline}</h2>
                <p>{item.text}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Loading media...</p>
        )}

        {/* Last slide: Book Appointment Button */}
        {categories.length > 0 && (
          <div className="FigmaPage-item book-appointment">
            <h2>Ready to Collaborate?</h2>
            <p>
              Book an appointment with us today to discuss how we can bring your
              project to life!
            </p>
            <div className="calendly-button-container">
              <a
                href="https://calendly.com/muhammadimranjhang/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="calendly-button">Book an Appointment</button>
              </a>
            </div>
          </div>
        )}
      </div>

      <button className="scroll-button rights" onClick={scrollRight}>
        &gt;
      </button>
    </div>
  );
}

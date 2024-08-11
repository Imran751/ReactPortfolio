import React from "react";
import "./Works.css";

export default function Works() {
  return (
    <div className="works-section" id="Works">
      <div className="works-header">
        <h2>My Works</h2>
      </div>
      <div className="works-slider">
        <div className="works-slider-container">
          <div className="works-slider-item">
            <img src="https://via.placeholder.com/1280x720" alt="Project 1" />
          </div>
          <div className="works-slider-item">
            <iframe 
              src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/XYZ"
              allowFullScreen
              title="Figma Prototype"
            ></iframe>
          </div>
          <div className="works-slider-item">
            <iframe 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              allowFullScreen
              title="YouTube Video"
            ></iframe>
          </div>
        </div>
        <button className="works-slider-button left">&lt;</button>
        <button className="works-slider-button right">&gt;</button>
      </div>
    </div>
  );
}

import React, { useState, useEffect, useRef } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../../../Components/Firebase";
import "./FeatureImage.css";

export default function FeatureImage({ setActiveSection }) {
  const [media, setMedia] = useState([]); // Combined state for images and videos
  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  // Fetch images and videos from Firebase Storage
  useEffect(() => {
    const storageRef = ref(storage, "FeatureImages/"); // Adjust folder name as needed
    const fetchMedia = async () => {
      try {
        const result = await listAll(storageRef);
        const mediaPromises = result.items.map(async (itemRef) => {
          const url = await getDownloadURL(itemRef);
          const name = itemRef.name;

          // Check the file type
          const isVideo = name.match(/\.(mp4|webm|ogg)$/i);

          return {
            name,
            url,
            type: isVideo ? "video" : "image", // Identify if it's a video or image
          };
        });

        const mediaData = await Promise.all(mediaPromises);
        setMedia(mediaData);
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
    <div className="FeatureImage-wrapper">
      <button className="scroll-button lefts" onClick={scrollLeft}>
        &lt;
      </button>
      <div className="FeatureImage-container" ref={containerRef}>
        {media.length > 0 ? (
          media.map((item, index) => (
            <div
              key={index}
              className="FeatureImage-item"
              ref={(el) => (itemRefs.current[index] = el)}
              onClick={() => focusMedia(index)}
            >
              {item.type === "image" ? (
                <img src={item.url} alt={item.name} />
              ) : (
                <video controls>
                  <source src={item.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          ))
        ) : (
          <p>Loading media...</p>
        )}
      </div>
      <button className="scroll-button rights" onClick={scrollRight}>
        &gt;
      </button>
    </div>
  );
}

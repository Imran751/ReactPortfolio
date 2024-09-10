import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../../Components/Firebase"; // Ensure this import is correct
import "./Testimonials.css";

// Initialize Firestore
const db = getFirestore(app);

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "testimonials"));
        const fetchedTestimonials = querySnapshot.docs.map((doc) => doc.data());

        // Debugging: Log fetched data
        console.log("Fetched Testimonials:", fetchedTestimonials);

        setTestimonials(fetchedTestimonials);
      } catch (error) {
        console.error("Error fetching testimonials: ", error);
      }
    };

    fetchTestimonials();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const autoAdvance = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const interval = setInterval(autoAdvance, 5000); // Automatically advance every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [testimonials.length]);

  // Ensure there are testimonials to display
  const visibleTestimonials = testimonials.length > 0
    ? [
        testimonials[currentIndex],
        testimonials[(currentIndex + 1) % testimonials.length],
        testimonials[(currentIndex + 2) % testimonials.length],
      ]
    : [];

  return (
    <div className="testimonials-container" id="Testimonials">
      <h2 className="testimonials-header">Our Clients' Feedback</h2>
      <div className="testimonials-slider">
        {visibleTestimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="image-container">
              {/* Ensure image path is correctly used */}
              <img
                src={testimonial?.image || "default-image.png"} // Replace with a placeholder if needed
                alt={`Client ${currentIndex + index + 1}`}
                className="testimonial-image"
              />
            </div>
            <div className="testimonial-text">
              <p className="testimonial-quote">"{testimonial?.quote || "No quote available"}"</p>
              <p className="testimonial-name">{testimonial?.name || "Unknown"}</p>
              <p className="testimonial-title">{testimonial?.title || "No title available"}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="testimonials-navigation">
        <button className="nav-button prev-button" onClick={handlePrev}>
          &lt;
        </button>
        <button className="nav-button next-button" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
  );
}

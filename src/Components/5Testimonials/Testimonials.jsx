import { useState, useEffect } from "react";
import "./Testimonials.css";

// Import your images with unique variable names
import Image1 from "../../Assets/ClientsImages/1.png";
import Image2 from "../../Assets/ClientsImages/2.png";
import Image3 from "../../Assets/ClientsImages/3.png";
import Image4 from "../../Assets/ClientsImages/4.png";
import Image5 from "../../Assets/ClientsImages/5.png";
import Image6 from "../../Assets/ClientsImages/6.png";
import Image7 from "../../Assets/ClientsImages/7.png";
import Image8 from "../../Assets/ClientsImages/8.png";

export default function Testimonials() {
  const testimonials = [
    {
      image: Image1, // Use the imported image variable
      quote: "This company exceeded our expectations. Their attention to detail is impeccable.",
      name: "Jane Smith",
      title: "Marketing Director, ABC Corp",
    },
    {
      image: Image2, // Use the imported image variable
      quote: "Professional and dedicated. We couldn’t be happier with the results.",
      name: "Robert Johnson",
      title: "COO, XYZ Ltd",
    },
    {
      image: Image3,
      quote: "Their team is amazing! They delivered top-notch service from start to finish.",
      name: "Emily Davis",
      title: "Founder, StartUp Co.",
    },
    {
      image: Image4,
      quote: "Exceptional work! They really understood our needs and delivered beyond expectations.",
      name: "Michael Brown",
      title: "CTO, Tech Innovators",
    },
    {
      image: Image5,
      quote: "We’ve seen remarkable results. Their expertise is second to none.",
      name: "Sarah Wilson",
      title: "Head of Operations, FastTrack Inc.",
    },
    {
      image: Image6,
      quote: "The attention to detail and the personalized service were outstanding. Truly a game-changer.",
      name: "Lisa Turner",
      title: "Product Manager, InnovateNow",
    },
    {
      image: Image7,
      quote: "Their innovative approach and dedication to our success were evident in every interaction.",
      name: "Daniel Lewis",
      title: "Chief Executive Officer, GreenTech",
    },
    {
      image: Image8,
      quote: "From concept to execution, their expertise made a significant impact on our project’s success.",
      name: "Sophia Martinez",
      title: "Director of Operations, Future Enterprises",
    },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };
  
    const interval = setInterval(handleNext, 5000); // Automatically advance every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [testimonials.length]); // Include testimonials.length as a dependency
  
  

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <div className="testimonials-container" id="Testimonials">
      <h2 className="testimonials-header">Our Clients' Feedback</h2>
      <div className="testimonials-slider">
        {visibleTestimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
           <div className="image-container">
    <img
      src={testimonial.image}
      alt={`Client ${currentIndex + index + 1}`}
      className="testimonial-image"
    />
  </div>
            <div className="testimonial-text">
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              <p className="testimonial-name">{testimonial.name}</p>
              <p className="testimonial-title">{testimonial.title}</p>
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

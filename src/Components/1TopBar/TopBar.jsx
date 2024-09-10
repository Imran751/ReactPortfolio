import React, { useState, useRef, useEffect } from "react";
import { FaPhone, FaEnvelope, FaUser, FaCog } from "react-icons/fa";
import "./TopBar.css";

const TopBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const modalRef = useRef(null); // Create a ref for the modal container
  const hamburgerRef = useRef(null); // Create a ref for the hamburger icon

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  const handleClickOutside = (event) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(event.target) &&
      hamburgerRef.current &&
      !hamburgerRef.current.contains(event.target)
    ) {
      setIsModalOpen(false);
      setIsHamburgerOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={`container ${isModalOpen ? "modal-open" : ""}`}>
      <div className="left">
        <a className="logo" href="#Hero">
          .imran
        </a>
      </div>
      <div className="center">
        <div className="phone">
          <FaPhone className="icon" /> <span>+92 300 6509123</span>
        </div>
        <div className="email">
          <FaEnvelope className="icon" />{" "}
          <span>muhammadimranjhang@gmail.com</span>
        </div>
        <span className="promo">10% off on first order.</span>
      </div>
      <div className="right">
        <img
          src={require("../../Assets/MuhammadImran.png")}
          alt="User"
          className="myImage"
        />
      </div>
      <div className="hamburger-container">
        <div
          ref={hamburgerRef}
          className={`hamburger ${isHamburgerOpen ? "open" : ""}`}
          onClick={toggleModal}
        >
          <div className="bar bar1"></div>
          <div className="bar bar2"></div>
          <div className="bar bar3"></div>
        </div>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div ref={modalRef} className="modal">
          <a
            href="#Hero"
            onClick={() => {
              setIsModalOpen(false);
              setIsHamburgerOpen(false);
            }}
          >
            Home
          </a>
          <a
            href="#Profile"
            onClick={() => {
              setIsModalOpen(false);
              setIsHamburgerOpen(false);
            }}
          >
            Profile
          </a>
          <a
            href="#Works"
            onClick={() => {
              setIsModalOpen(false);
              setIsHamburgerOpen(false);
            }}
          >
            Works
          </a>
          <a
            href="#Testimonials"
            onClick={() => {
              setIsModalOpen(false);
              setIsHamburgerOpen(false);
            }}
          >
            Testimonials
          </a>
          <a
            href="#Contact"
            onClick={() => {
              setIsModalOpen(false);
              setIsHamburgerOpen(false);
            }}
          >
            Contact
          </a>
          <a
            href="#Footer"
            onClick={() => {
              setIsModalOpen(false);
              setIsHamburgerOpen(false);
            }}
          >
            Footer
          </a>

          <br />
          <br />
          <hr />

          <a href="#About" className="about">
            <FaUser className="modal-icon" /> About
          </a>
          <a href="#Settings" className="settings">
            <FaCog className="modal-icon" /> Settings
          </a>
        </div>
      )}
    </div>
  );
};

export default TopBar;

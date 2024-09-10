import React from "react";
import { ReactTyped } from "react-typed";
import resumePdf from "../../Assets/europassDeveloperImranCV.pdf";
import "./Hero.css";

export default function Hero() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePdf;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="Hero" id="Hero">
      <div className="left">
        <div className="imgContainer">
          <img src={require("../../Assets/MuhammadImran.png")} alt="Imran" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Imran</h1>
          <h3>
            Freelance{" "}
            <span>
              <ReactTyped
                strings={[
                  "Designer",
                  "App Developer!",
                  "Web Developer",
                  "Full-Stack Developer",
                  "Content Creator ",
                ]}
                typeSpeed={50}
                backSpeed={25}
                backDelay={1500}
                loop
              />
            </span>
          </h3>
          <div className="btnSocail">
            <div className="downloadCvBtn">
              <button onClick={handleDownload}>Download CV</button>
            </div>
            <div className="SocialContainer">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={require("../../Assets/git.png")} alt="GitHub" />
              </a>
              <a
                href="https://youtube.com/yourchannel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={require("../../Assets/youtube.png")} alt="YouTube" />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={require("../../Assets/x.png")} alt="Twitter" />
              </a>
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={require("../../Assets/insta.png")} alt="Instagram" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require("../../Assets/linkedin.png")}
                  alt="LinkedIn"
                />
              </a>
            </div>
          </div>
        </div>
        <a href="#Profile" className="arrowDown">
          <img src={require("../../Assets/down.png")} alt="Down Arrow" />
        </a>
      </div>
    </div>
  );
}

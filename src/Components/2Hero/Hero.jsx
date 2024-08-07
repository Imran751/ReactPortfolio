import React from "react";
import { ReactTyped } from "react-typed";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="Hero" id="Hero">
      <div className="left">
        <div className="imgContainer">
          <img src={require("../../Assets/imran.png")} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Muhammad Imran</h1>
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
              <button>Download Cv</button>
            </div>
            <div className="SocialContainer">
              <img src={require("../../Assets/git.png")} alt="" />
              <img src={require("../../Assets/youtube.png")} alt="" />
              <img src={require("../../Assets/x.png")} alt="" />
              <img src={require("../../Assets/insta.png")} alt="" />
              <img src={require("../../Assets/linkedin.png")} alt="" />
            </div>
          </div>
        </div>
        <a href="#Profile">
          <img src={require("../../Assets/down.png")} alt="" />
        </a>
      </div>
    </div>
  );
}

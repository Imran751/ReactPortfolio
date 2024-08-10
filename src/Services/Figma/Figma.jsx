import React from "react";
import "./Figma.css";
import FeatureImageContainer from "../Feature/FeatureImage/FeatureImage";
import FigmaPage from "../../ServicesPages/FigmaPage/FigmaPage";

export default function Feature() {
  return (
    <div className="Figma" id="Figma">
      <FeatureImageContainer />
      <FigmaPage />
    </div>
  );
}

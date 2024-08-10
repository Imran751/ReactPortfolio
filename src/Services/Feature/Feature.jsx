import React from "react";
import "./Feature.css";
import FeatureImageContainer from "./FeatureImage/FeatureImage";
import FeaturePage from "../../ServicesPages/FeaturePage/FeaturePage";

export default function Feature() {
  return (
    <div className="Feature" id="Feature">
      <FeatureImageContainer />
      <FeaturePage />
    </div>
  );
}

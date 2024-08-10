import React from "react";
import "./Website.css";
import FeatureImageContainer from "../Feature/FeatureImage/FeatureImage";
import WebsitePage from "../../ServicesPages/WebsitePage/WebsitePage";

export default function Feature() {
  return (
    <div className="Feature" id="Feature">
      <FeatureImageContainer />
      <WebsitePage />
    </div>
  );
}

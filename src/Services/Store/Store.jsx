import React from "react";
import "./Store.css";
import FeatureImageContainer from "../Feature/FeatureImage/FeatureImage";
import StorePage from "../../ServicesPages/StorePage/StorePage";

export default function Feature() {
  return (
    <div className="Feature" id="Feature">
      <FeatureImageContainer />
      <StorePage />
    </div>
  );
}

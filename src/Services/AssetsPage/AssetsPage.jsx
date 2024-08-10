import React from "react";
import "./AssetsPage.css";
import FeatureImageContainer from "../Feature/FeatureImage/FeatureImage";
import PageAsset from "../../ServicesPages/PageAsset/PageAsset";

export default function Feature() {
  return (
    <div className="Feature" id="Feature">
      <FeatureImageContainer />
      <PageAsset />
    </div>
  );
}

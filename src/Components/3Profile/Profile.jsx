import React, { useState } from "react";
import "./Profile.css";
import CategoryContainer from "../../Services/CategoryContainer/CategoryContainer";
import FeatureDes from "../../Services/ServicesDes/FeatureDes/FeatureDes";
import FeatureImage from "../../Services/ServicesImages/FeatureImage/FeatureImage";
import AssetDes from "../../Services/ServicesDes/AssetDes/AssetDes";
import FigmaDes from "../../Services/ServicesDes/FigmaDes/FigmaDes";
import WebsiteDes from "../../Services/ServicesDes/WebsiteDes/WebsiteDes";
import StoreDes from "../../Services/ServicesDes/StoreDes/StoreDes";
import AppDec from "../../Services/ServicesDes/AppDec/AppDec";
import FigmaImage from "../../Services/ServicesImages/FigmaImage/FigmaImage";
import WebImage from "../../Services/ServicesImages/WebImage/WebImage";
import AppImage from "../../Services/ServicesImages/AppImage/AppImage";
import AssetsImage from "../../Services/ServicesImages/AssetsImage/AssetsImage";
import StoreImage from "../../Services/ServicesImages/Store/Store";

export default function Profile() {
  const [activeSection, setActiveSection] = useState("Feature");

  const renderSection = () => {
    switch (activeSection) {
      case "Feature":
        return (
          <>
            <FeatureImage />
            <FeatureDes />
          </>
        );
      case "Assets":
        return (
          <>
            <AssetsImage />
            <AssetDes />
          </>
        );
      case "Figma":
        return (
          <>
            <FigmaImage />
            <FigmaDes />
          </>
        );
      case "Websites":
        return (
          <>
            <WebImage />
            <WebsiteDes />
          </>
        );
      case "Store":
        return (
          <>
            <StoreImage />
            <StoreDes />
          </>
        );
      case "MobileApps":
        return (
          <>
            <AppImage />
            <AppDec />
          </>
        );
      default:
        return (
          <>
            <FeatureImage />
            <FeatureDes />
          </>
        );
    }
  };

  return (
    <div className="Profile" id="Profile">
      <div className="profielHeading">
        <h1>Profile</h1>
      </div>
      <CategoryContainer setActiveSection={setActiveSection} />
      {renderSection()}
    </div>
  );
}

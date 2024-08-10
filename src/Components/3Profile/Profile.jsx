import React, { useState } from "react";
import "./Profile.css";
import CategoryContainer from "./CategoryContainer/CategoryContainer";
import Feature from "../../ServicePages/Feature/Feature";
import AssetsPage from "../../ServicePages/AssetsPage/AssetsPage";
import Figma from "../../ServicePages/Figma/Figma";
import Store from "../../ServicePages/Store/Store";
import Website from "../../ServicePages/Website/Website";

export default function Profile() {
  const [activeSection, setActiveSection] = useState("Feature");

  const renderSection = () => {
    switch (activeSection) {
      case "Feature":
        return <Feature />;
      case "Assets":
        return <AssetsPage />;
      case "Figma":
        return <Figma />;
      case "Website":
        return <Website />;
      case "Store":
        return <Store />;
      default:
        return <Feature />;
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

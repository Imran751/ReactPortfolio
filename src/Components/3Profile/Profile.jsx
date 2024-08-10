import React from "react";
import "./Profile.css";
import CategoryContainer from "./CategoryContainer/CategoryContainer";
import Feature from "../../ServicePages/Feature/Feature";
import AssetsPage from "../../ServicePages/AssetsPage/AssetsPage";
import Figma from "../../ServicePages/Figma/Figma";
import Store from "../../ServicePages/Store/Store";
import Website from "../../ServicePages/Website/Website";

export default function Profile() {
  return (
    <div className="Profile" id="Profile">
      <div className="profielHeading">
        <h1> Profile</h1>
      </div>
      <CategoryContainer />
      <Feature />
      <AssetsPage />
      <Figma />
      <Website />
      <Store />
    </div>
  );
}

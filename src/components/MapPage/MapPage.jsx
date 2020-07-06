import React from "react";
import s from "./MapPage.module.css";
import NavBar from "../NavBar/NavBar";
import Map from "./Map/Map";

const MapPage = (props) => {
  return (
    <div>
      <NavBar />
      <Map />
    </div>
  );
};
export default MapPage;

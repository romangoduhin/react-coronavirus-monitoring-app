import React from "react";
import s from "./MainPage.module.css";
import NewsBlock from "./NewsBlock/NewsBlock";
import StatBlock from "./StatBlock/StatBlock";
import MapBlock from "./MapBlock/MapBlock";
import NavBar from "../NavBar/NavBar";
import SympthomsBlock from "./SympthomsBlock/SympthomsBlock";

const MainPage = (props) => {
  return (
    <div className={s.wrapper}>
      <NavBar />
      <div className={s.wrapperContent}>
        <MapBlock />
        <StatBlock />
        <NewsBlock />
        <SympthomsBlock />
      </div>
    </div>
  );
};
export default MainPage;

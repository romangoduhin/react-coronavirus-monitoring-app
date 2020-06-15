import React from 'react';
import MapBlock from "./MapBlock/MapBlock";
import StatBlock from "./StatBlock/StatBlock";
import NewsBlock from "./NewsBlock/NewsBlock";
import s from "./MainPage.module.css"
import NavBar from "../NavBar/NavBar";

const MainPage = (props) => {
    return (
        <div className={s.wrapper}>
            <NavBar/>
            <div className={s.wrapperContent}>
            <MapBlock/>
            <StatBlock/>
            <NewsBlock/>
            </div>
        </div>
    )
};
export default MainPage;
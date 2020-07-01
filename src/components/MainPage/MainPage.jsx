import React from 'react';
import s from "./MainPage.module.css"
import NewsBlock from "./NewsBlock/NewsBlock";
import StatBlock from "./StatBlock/StatBlock";
import MapBlock from "./MapBlock/MapBlock";
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
import React from 'react';
import MapBlock from "./MapBlock/MapBlock";
import StatBlock from "./StatBlock/StatBlock";
import NewsBlock from "./NewsBlock/NewsBlock";
import s from "./MainPage.module.css"
const MainPage =(props)=>{
    return(
        <div className={s.wrapper}>
    <MapBlock/>
    <StatBlock/>
    <NewsBlock/>
        </div>
)
};
export default MainPage;
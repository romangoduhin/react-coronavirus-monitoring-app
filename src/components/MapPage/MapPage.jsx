import React from 'react';
import s from "./MapPage.module.css"
import NavBar from "../NavBar/NavBar";

const MapPage = (props) => {

    return (
        <div>
            <NavBar/>
            <div className={s.wrapper}>
                MapPage
            </div>
        </div>
    )
};
export default MapPage;
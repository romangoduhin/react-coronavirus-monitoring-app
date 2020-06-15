import React from 'react';
import s from "./NavBar.module.css"
import {NavLink} from "react-router-dom";

const NavBar =(props)=>{
    return(
        <div className={s.blockWrapper}>
            <div className={s.item}><NavLink to='' activeClassName={s.activeLink} >Главная</NavLink></div>
            <div className={s.item}><NavLink to='/news' activeClassName={s.activeLink} >Новости</NavLink></div>
            <div className={s.item}><NavLink to='/map' activeClassName={s.activeLink} >Карта</NavLink></div>
            <div className={s.item}><NavLink to='/statistic' activeClassName={s.activeLink} >Статистика</NavLink></div>

        </div>
)
};
export default NavBar;
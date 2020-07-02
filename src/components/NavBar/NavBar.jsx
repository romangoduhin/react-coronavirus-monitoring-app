import React from "react";
import s from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../services/pngfuel.com.png";
const NavBar = (props) => {
  return (
    <div className={s.blockWrapper}>
      <div className={s.logo}>
        <img src={logo} alt="picture" />
      </div>
      <div className={s.navWrapper}>
        <div className={s.item}>
          <NavLink to="/" activeClassName={s.activeLink}>
            Главная
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/news" activeClassName={s.activeLink}>
            Новости
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/map" activeClassName={s.activeLink}>
            Карта
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/statistic" activeClassName={s.activeLink}>
            Статистика
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default NavBar;

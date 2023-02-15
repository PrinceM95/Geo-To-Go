import React from "react";
import style from './style.module.scss';
import { NavLink } from "react-router-dom";

const Header = () => (
    <div className={style.header}>
        <h1>Geo-To-Go!</h1>
        <ul className={style.navList}>
            <NavLink to="/">HOME</NavLink>
            <NavLink to='/africa'>AF</NavLink>
            <NavLink to='/asia'>AS</NavLink>
            <NavLink to='/europe'>EU</NavLink>
            <NavLink to='/na'>NA</NavLink>
            <NavLink to='/oceania'>OC</NavLink>
            <NavLink to='/sa'>SA</NavLink>
            {/* <NavLink to='/contact'>Contact</NavLink> */}
            <NavLink to='/about'>ABOUT</NavLink>
        </ul>
    </div>
        

    );

export default Header;
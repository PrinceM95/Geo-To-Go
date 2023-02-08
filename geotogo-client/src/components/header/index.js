import React from "react";
import style from './style.module.scss';
import { NavLink } from "react-router-dom";

const Header = () => (
    <div className={style.header}>
        <h1>Geo To Go</h1>
        <ul className={style.navList}>
            <NavLink to="/">Home</NavLink>
            <NavLink to='/africa'>Africa</NavLink>
            <NavLink to='/asia'>Asia</NavLink>
            <NavLink to='/europe'>Europe</NavLink>
            <NavLink to='/na'>NA</NavLink>
            <NavLink to='/sa'>SA</NavLink>
            <NavLink to='/oceania'>Oceania</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/about'>About</NavLink>
        </ul>
    </div>
        

    );

export default Header;
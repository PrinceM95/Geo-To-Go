import React from "react";
import style from './style.module.scss';
import { NavLink } from "react-router-dom";
<<<<<<< HEAD
import quiz from '../../assets/quiz.png';
=======
>>>>>>> 01508226f07d52318f3e530f4c8dea2d9cd5cae7

const Header = () => (
    <div className={style.header}>
        <h1>Geo-To-Go</h1>
        <ul className={style.navList}>
            <NavLink to="/">HOME</NavLink>
            <NavLink to='/africa'>AF</NavLink>
            <NavLink to='/asia'>AS</NavLink>
            <NavLink to='/europe'>EU</NavLink>
            <NavLink to='/north america'>NA</NavLink>
            <NavLink to='/oceania'>OC</NavLink>
<<<<<<< HEAD
            <NavLink to='/south america'>SA</NavLink>
=======
            <NavLink to='/sa'>SA</NavLink>
>>>>>>> 01508226f07d52318f3e530f4c8dea2d9cd5cae7
            <NavLink to='/contact'>QUIZ</NavLink>
            <NavLink to='/about'>ABOUT</NavLink>
        </ul>
    </div>
        

    );

export default Header;
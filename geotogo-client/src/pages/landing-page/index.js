import React from 'react';
import { Link } from 'react-router-dom'
import style from './style.module.scss';
import world from '../../assets/world4.mp4';


const LandingPage = () => {

    return (
        <div className={style.landing}>
            <div className={style.button}><Link to="/home" target="_blank" rel="noreferrer">Enter</Link></div>
        <div className={style.opener}> “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
        </div>
        <video  autoPlay muted loop width="100%" height="30%">
            <source src={world}/> 
        </video>
        </div>
        ); 
    }
    
    export default LandingPage;
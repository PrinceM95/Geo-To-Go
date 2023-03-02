import React from 'react';
import style from './style.module.scss';
import world from '../../assets/world4.mp4';


const LandingPage = () => {

    return (
        <div className={style.landing}>
            <div className={style.button}></div>
        <div className={style.opener}> “Your one-stop shop for continents, countries, capitals and cultures at their core. We are committed to providing a positive learning environment that inspires humanity, both in the air and on the ground. This is Geo-To-Go”
        </div>
        <video  autoPlay muted loop width="100%" height="30%">
            <source src={world}/> 
        </video>
        </div>
        );  
    }
    
    export default LandingPage;
import React from 'react';
import style from './style.module.scss';
import world from '../../assets/world4.mp4';

const LandingPage = () => {

    return (
        <div className={style.landing}>
        <h1 className={style.landingHeader}>"We are committed to providing a positive learning environment that inspires humanity, both in the air and on the ground."</h1>
            <a className={style.button} href="/home" target="_blank" rel="noreferrer">Enter</a>
        {/* <div className={style.opener}> “Impossible to map the world – we select and make graphics so that we can understand it” -Roger Tomlinson
        </div> */}
        <video  autoPlay muted loop >
            <source src={world}/> 
        </video>
        </div>
        ); 
    }
    
    export default LandingPage;
import React from 'react';
import style from './style.module.scss';
import world from '../../assets/world4.mp4';


const LandingPage = () => {

    return (
        <div className={style.landing}>
            <h1 className={style.landingHeader}>“Your one-stop shop for continents, countries, capitals and cultures at their core. We are committed to providing a positive learning environment that inspires humanity, both in the air and on the ground. This is Geo-To-Go”</h1>
            <a className={style.button} href="/home" target="_blank" rel="noreferrer">Enter</a>
            <video autoPlay muted loop >
                <source src={world} />
            </video>
        </div>
    );
}

export default LandingPage;
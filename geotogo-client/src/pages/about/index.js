import React from 'react';
import constImg from '../../assets/const-pic-1.jpeg';
import dougImg from '../../assets/dougholt-pic-1.jpg';
import kadeenImg from '../../assets/kadeen-pic-1.jpg';
import princeImg from '../../assets/prince-pic-1.jpg';
import style from './style.module.scss';

const AboutPage = () => {

    return (
        <div className={style.about}>
            <div className={style.about-heading}>
                <h1>Geo-To-Go Development Team</h1>  
            </div>
            <div className={style.about-container}>
                <div className={style.about-item}>
                    <h2>Constance Cain</h2>
                    <img className={style.about-img} src={constImg} alt="constance-profile" width='300' height='auto' />
                    <p className={style.about-bio}>I live in Columbus, Ohio. I am a student developer at We Can Code IT. My hobbies include Photography and Painting</p>  
                </div>
                <div className={style.about-item}>
                    <h2>Kadeen Jennings</h2>
                    <img className={style.about-img} src={kadeenImg} alt="kadeen-profile" width='300' height='auto' />
                    <p className={style.about-bio}>I live in Columbus, Ohio. I am a student developer at We Can Code IT. My hobbies include Photography and Painting</p>  
                </div>
                <div className={style.about-item}>
                    <h2>Doug Holt</h2>
                    <img className={style.about-img} src={dougImg} alt="doug-profile" width='300' height='auto' />
                    <p className={style.about-bio}>I live in Columbus, Ohio. I am a student developer at We Can Code IT. My hobbies include Professional Rodeo Clown and eating green Jello</p>  
                </div>
                <div className={style.about-item}>
                    <h2>Prince Moutima</h2>
                    <img className={style.about-img} src={princeImg} alt="prince-profile" width='300' height='auto' />
                    <p className={style.about-bio}>I live in Columbus, Ohio. I am a student developer at We Can Code IT. My hobbies include Photography and Painting</p>  
                </div>
            </div>
        </div>
        ); 
    }
    
    export default AboutPage;
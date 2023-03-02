import React from 'react';
import constImg from '../../assets/const-pic-1.jpeg';
import dougImg from '../../assets/dougholt-pic-1.jpg';
import kadeenImg from '../../assets/kadeen-pic-1.jpg';
import princeImg from '../../assets/prince-pic-1.jpg';
import style from './style.module.scss';

const AboutPage = () => {

    return (
        <div className={style.about}>
            <div className={style.aboutHeading}>
                <h1>About the Geo-To-Go Development Team</h1>  
            </div>
            <div className={style.aboutContainer}>
                <div className={style.aboutItem1}>
                    
                    <img className={style.aboutImage} src={constImg} alt="constance-profile" />
                    <h2>Constance Cain</h2>
                    <h3>WCCI Developer</h3>
                    <p className={style.aboutBio}>Constance lives in Columbus, Ohio. Her hobbies include Beetle Fighting, Toy Voyaging, Tree Shaping and eating Jello.</p>  
                </div>
                <div className={style.aboutItem2}>
                    
                    <img className={style.aboutImage} src={kadeenImg} alt="kadeen-profile" />
                    <h2>Kadeen Jennings</h2>
                    <h3>WCCI Developer</h3>
                    <p className={style.aboutBio}>Kadeen lives in Columbus, Ohio. His hobbies include Competitive Duck Herding, Geocaching and eating Jello.</p>  
                </div>
                <div className={style.aboutItem3}>
                    
                    <img className={style.aboutImage} src={dougImg} alt="doug-profile" />
                    <h2>Doug Holt</h2>
                    <h3>WCCI Developer</h3>
                    <p className={style.aboutBio}>Doug lives in Cleveland, Ohio. His hobbies include Professional Rodeo Clown, Time Travel and eating Jello.</p>  
                </div>
                <div className={style.aboutItem4}>
                    
                    <img className={style.aboutImage} src={princeImg} alt="prince-profile" />
                    <h2>Prince Moutima</h2>
                    <h3>WCCI Developer</h3>
                    <p className={style.aboutBio}>Prince lives in Columbus, Ohio. His hobbies include Newsraiding, Samurai Sword Collecting and Extreme Ironing.</p>  
                </div>
            </div>
        </div>
        ); 
    }
    
    export default AboutPage;
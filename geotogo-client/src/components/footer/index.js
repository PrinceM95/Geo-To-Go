import React from "react";
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import style from './style.module.scss';

const Footer = () => ( 

    <div className={style.footer}>
        <div>
            <h3>Contact Us </h3>  
        </div>
        <div>
            <h3> &copy;GeoToGo 2023</h3>
        </div>
        <div className={style.socialList}>
            
                <a><SocialIcon url="https://github.com/2022-October-Java-PT/GeoToGo" /></a>
                <a><SocialIcon url="https://linkedin.com" /></a>
                <a><SocialIcon url="https://facebook.com" /></a>
                <a><SocialIcon url="https://instagram.com" /></a>
                
        </div>

    </div>
);
    
export default Footer;
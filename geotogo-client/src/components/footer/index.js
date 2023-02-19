import React from "react";
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import style from './style.module.scss';

const Footer = () => ( 

    <div className={style.footer}>
        <div>
            <h3>Contact Us</h3>  
        </div>
        <div>
            <h3>&copy; WCCI 2023</h3>
        </div>
        <div className={style.socialList}>
            
                <a><SocialIcon url="https://github.com/2022-October-Java-PT/GeoToGo" /></a>
                <a><SocialIcon url="https://linkedin.com" /></a>
                <a><SocialIcon url="https://facebook.com" /></a>
                <a><SocialIcon url="https://instagram.com" /></a>
                
            
        
                
                
                {/* <li><a href="https://github.com/2022-October-Java-PT/digi-dreamers-mystery-educator-repo" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li> */} 
        </div>

    </div>
);
    
export default Footer;
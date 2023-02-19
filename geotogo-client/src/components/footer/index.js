import React from "react";
import style from './style.module.scss';

const Footer = () => (
    <div className={style.footer}>
        <div>
            <h3>Contact Us</h3>  
        </div>
        <div>
            <h3>&copy; WCCI 2023</h3>
        </div>
        <div>
            <ul className={style.socialList}>
                <li><a href="https://github.com/2022-October-Java-PT/digi-dreamers-mystery-educator-repo" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
    </ul>  
        </div>
    </div>
);
    
export default Footer;
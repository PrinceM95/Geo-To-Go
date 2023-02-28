import React from "react";
import { SocialIcon } from 'react-social-icons';
import style from './style.module.scss';

const Footer = () => ( 

    <div className={style.footer}>
        <div>
            <h3> &copy;GeoToGo 2023</h3>
        </div>
        <div className={style.socialList}> 
                
                <SocialIcon style={{ height: 40, width: 40, margin: 5 }}  bgColor="white" url="https://github.com/2022-October-Java-PT/GeoToGo" target="_blank" rel="noopener noreferrer"/>
                
                <SocialIcon style={{ height: 40, width: 40, margin: 5 }} bgColor="white" url="https://linkedin.com" target="_blank" rel="noopener noreferrer"/>
                
                <SocialIcon style={{ height: 40, width: 40, margin: 5 }} bgColor="white" url="https://facebook.com" target="_blank" rel="noopener noreferrer"/>
                
                <SocialIcon style={{ height: 40, width: 40, margin: 5 }} bgColor="white" url="https://instagram.com" target="_blank" rel="noopener noreferrer"/>
            
        </div>
    
    </div>
);
    
export default Footer;
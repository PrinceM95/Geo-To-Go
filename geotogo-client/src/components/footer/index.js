import React from "react";
// import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import style from './style.module.scss';

const Footer = () => ( 

    <div className={style.footer}>
        {/* <div>
            <h3>Contact Us</h3>
        </div> */}
        <div>
            <h3>&copy; Geo-To-Go 2023</h3>
        </div>
        <div className={style.socialList}> 
                
                <SocialIcon style={{ height: 40, width: 40, margin: 5 }}  bgColor="white" url="https://github.com/2022-October-Java-PT/GeoToGo" target="_blank" rel="noopener noreferrer"/>
                
                <SocialIcon style={{ height: 40, width: 40, margin: 5 }} bgColor="white" url="https://linkedin.com" target="_blank" rel="noopener noreferrer"/>
                
                <SocialIcon style={{ height: 40, width: 40, margin: 5 }} bgColor="white" url="https://facebook.com" target="_blank" rel="noopener noreferrer"/>
                
                <SocialIcon style={{ height: 40, width: 40, margin: 5 }} bgColor="white" url="https://instagram.com" target="_blank" rel="noopener noreferrer"/>
                
            
        
                
                
                {/* <li><a href="https://github.com/2022-October-Java-PT/GeoToGo" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>  */}
        </div>

    </div>
);
    
export default Footer;
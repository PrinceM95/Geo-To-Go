import React from 'react';
import style from './style.module.scss';
import countries from './data';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const NAPage = () => {

    return (
        <div className={style.na}>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1179 1329.4" >
		{countries.map((country, idx) => {
                    return <>
                    <Tippy content={country.name}>
                    <path d={country.d} fill={country.fill} stroke={country.stroke} />
                    </Tippy>
                    </> 
                })}
            </svg>
        </div>
        ); 
    }
    
    export default NAPage;
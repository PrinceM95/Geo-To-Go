import 'tippy.js/dist/tippy.css';

import React from 'react';
import Tippy from '@tippyjs/react';
import countries from './data';
import euFF from '../../assets/africa_fact_fun.gif';
import style from './style.module.scss';

const EuropePage = () => {

    return (
        <div className={style.europe}>
        <svg version="1.2" viewBox="0 0 1000 684"  xmlns="http://www.w3.org/2000/svg">
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


    export default EuropePage;
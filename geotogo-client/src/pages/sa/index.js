import 'tippy.js/dist/tippy.css';

import React from 'react';
import Tippy from '@tippyjs/react';
import countries from './data';
import style from './style.module.scss';
import saFF from '../../assets/africa_fact_fun.gif';

const SAPage = () => {

    return (
        <div className={style.sa}>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
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

    
    export default SAPage;
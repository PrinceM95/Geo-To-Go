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
                    return (
                    <Tippy content={country.name} key = {idx}>
                    <path d={country.d} fill={country.fill} stroke={country.stroke} onClick= {()=> handleClick(country.name)}/>
                    </Tippy>)
                
                })}
            </svg>
            <div className={style.europeDetail}>
                <h1>{data?.name?.common}</h1>
                <h3>Capital: {data?.capital}</h3>
                <h3>Languages: {data?.languages?.ara}</h3>
                {flag &&<img src={data?.flags?.png} alt="flag pic"></img>}
            </div>

            <div className={style.euFacts}>
                <img src={euFF} className={style.euf} alt="logo"></img>
            </div> 
        </div>
        ); 
    }


    export default EuropePage;
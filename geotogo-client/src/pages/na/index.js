import React from 'react';
import style from './style.module.scss';
import countries from './data';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useState } from 'react';

const NAPage = () => {
    const[data,setData]= useState({})
    const[flag,setFlag]= useState(false)

    const handleClick = (state) =>{
        var headers = new Headers();
headers.append("ZVNHWnZPQkQ0ck1WdUpJbXlvOXRtelF2UUhSNzJVRWJxYnNKZ3VqRw==", "API_KEY");
var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
   };
   
   fetch("https://api.countrystatecity.in/v1/countries/US/states/OH", requestOptions)
   .then(response => response.text())
   .then(result => console.log(result))
   .catch(error => console.log('error', error));

    }

    return (
        <div className={style.na}>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1179 1329.4" >
		{countries.map((country, idx) => {
                    return <>
                    <Tippy content={country.name}>
                    <path d={country.d} fill={country.fill} stroke={country.stroke}onClick= {()=> handleClick(country.name)} />
                    </Tippy>
                    </> 
                })}
            </svg>
            <div className={style.stateDetail}>
                <h1>{data?.name?.common}</h1>
                <h3>Capital: {data?.capital}</h3>
                <h3>Languages: {data?.languages?.ara}</h3>
                {flag &&<img src={data?.flags?.png} alt="flag pic"></img>}
            </div>
            {/* <div className={style.africaFacts}>
                <img src={africaFF} className={style.aff} alt="logo"></img> 
            </div>*/}
        </div>
        
        ); 
    }
    
    export default NAPage;
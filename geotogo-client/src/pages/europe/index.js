import 'tippy.js/dist/tippy.css';
import React from 'react';
import Tippy from '@tippyjs/react';
import countries from './data';
import euFF from '../../assets/africa_fact_fun.gif';
import style from './style.module.scss';
import { useState } from 'react';


const EuropePage = () => {
    const[data,setData]= useState({})
    const[flag,setFlag]= useState(false)

    const handleClick = (country) =>{
        setFlag(true)
        let url=`https://restcountries.com/v3.1/name/${country}`
        fetch(url)
        .then((response)=> response.json())
        .then((data)=> {
            console.log(data[0])
            setData(data[0])
            
        })
        .catch((error)=>{
            console.log(error)
        })
    }

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
                <img src={data?.flags?.png} alt="flag pic"></img>
            </div>

            {/* <div className={style.africaFacts}>
                <img src={africaFF} className={style.euf} alt="logo"></img>
            </div>  */}
        </div>
        ); 
    }


    export default EuropePage;
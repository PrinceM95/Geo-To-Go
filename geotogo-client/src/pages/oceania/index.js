import React from 'react';
import style from './style.module.scss';
import countries from './data';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useState } from 'react';
<<<<<<< HEAD
// import ocFF from '../../assets/oc_facts.gif';

const OceaniaPage = () => {
    const[data,setData]= useState({})
    const[flag,setFlag]= useState(false)
=======

const OceaniaPage = () => {
    const[data,setData]= useState({})
>>>>>>> 01508226f07d52318f3e530f4c8dea2d9cd5cae7

    const handleClick = (country) =>{
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
        <div className={style.oceania}>
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280.000000 878.000000">
                <g transform="translate(0.000000,878.000000) scale(0.100000,-0.100000)">
                {countries.map((country, idx) => {
                    return (
                    <Tippy content={country.name} key = {idx}>
                    <path d={country.d} onClick= {()=> handleClick(country.name)}/>
                    </Tippy> )
                })}
                    
                </g>
            </svg>
            <div className={style.oceanicDetail}>
                <h1>{data?.name?.common}</h1>
                <h3>Capital: {data?.capital}</h3>
                <h3>Languages: {data?.languages?.ara}</h3>
                {flag &&<img src={data?.flags?.png} alt="flag pic"></img>}
            </div> 

            {/* <div className={style.ocFacts}>
                <img src={ocFF} className={style.ocf} alt="logo"></img>
            </div>  */}

        </div>
    );
}

export default OceaniaPage;
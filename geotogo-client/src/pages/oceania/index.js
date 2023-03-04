import React from 'react';
import style from './style.module.scss';
import {countries,getCountryByName} from './data';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useState } from 'react';
import ocFF from '../../assets/ocFigures.gif';
import quiz from '../../assets/quiz.png';
import background from "../../assets/oceania2.gif";

const OceaniaPage = () => {
    const[data,setData]= useState({})
    const[flag,setFlag]= useState(false)

    const handleClick = (country) =>{
        setFlag(true)
        let url=`https://restcountries.com/v3.1/name/${country}`
        fetch(url)
        .then((response)=> response.json())
        .then((data)=> {
            console.log(data[0])
            
            let description=getCountryByName(country).description
            data[0].description=description
            setData(data[0])
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    
    return (
        <div className={style.backB} style={{ backgroundImage: `url(${background})` }}>
        <div className={style.oceania}>
            <svg width="1000" height="600" version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280.000000 878.000000">
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
                <h3>Languages: {data?.languages && Object.values(data?.languages).map((l)=>{
                    return <span key={l}>{l}, </span>
                }) }</h3>
                {flag &&<img src={data?.flags?.png} alt="flag pic"></img>}
                <p>{data?.description}</p>
            </div> 

            <div className={style.ocFacts}>
                <img src={ocFF} className={style.ocf} alt="logo"></img>
            </div> 

            <div className={style.quizLogo}>
            <a href="/oceania_quiz" target="_blank" rel="noreferrer">
                <img src={quiz} className={style.quiz} alt="oceania_quiz"></img>
            </a>
            </div>

            <div className={style.name}>
            <h1>Oceania</h1>
            </div>
        </div>
    </div>
    );
}

export default OceaniaPage;
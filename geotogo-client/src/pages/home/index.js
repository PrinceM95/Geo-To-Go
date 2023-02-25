import React from 'react';
import style from './style.module.scss';
import continents from './data';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import saF from '../../assets/saFlag.png';
import amF from '../../assets/amFlag.png';
import brF from '../../assets/brFlag.png';
import geF from '../../assets/geFlag.png';
import chF from '../../assets/chFlag.png';
import auF from '../../assets/auFlag.png';
import nelson from '../../assets/mandela.png';
import hdt from '../../assets/saca.png';
import pele from '../../assets/pele.png';
import einstein from '../../assets/einstein1.png';
import lee from '../../assets/lee.png';
import franklin from '../../assets/franklin.png';


const HomePage = () => {

    return (
        <div className={style.worldMap}>
            <div className={style.prompt}>Click on a continent to begin exploring!</div>
            <div className={style.naQuote}><h3 className={style.naWord}> "Amazing the things you find when you bother to search for them" - Sacagewea</h3></div>
            <div className={style.afQuote}><h3> “Education is the most powerful weapon which you can use to change the world.” -Nelson Mendela </h3></div>
            <div className={style.saQuote}><h3> "If you don't give education to people, it is easy to manipulate them." -Pele </h3></div>
            <div className={style.euQuote}><h3> "The most incomprehensible thing about the world is that it is at all comprehensible." -Albert Einstein</h3></div>
            <div className={style.asQuote}><h3> “Life itself is your teacher, and you are in a state of constant learning.” -Bruce Lee </h3></div>
            <div className={style.ocQuote}><h3> “Someone to tell it to is one of the fundamental needs of human beings.” -Miles Franklin </h3></div>
            
            <div className={style.saFlag}>
                <a href="/africa" target="_blank" rel="noreferrer">
                    <img width="325" height="325" src={saF} alt="africa_page"></img>
                </a>
            </div>

            <div className={style.nelson}>
                    <img width="125" height="125" src={nelson} alt="africa_page"></img>
            </div>

            <div className={style.amFlag}>
                <a href="/north america" target="_blank" rel="noreferrer">
                    <img width="325" height="325" src={amF} alt="na_page"></img>
                </a>
            </div>

            <div className={style.hdt}>
                    <img width="125" height="125" src={hdt} alt="na_page"></img>
            </div>

            <div className={style.brFlag}>
                <a href="/south america" target="_blank" rel="noreferrer">
                    <img width="325" height="325" src={brF} alt="sa_page"></img>
                </a>
            </div>

            <div className={style.pele}>
                    <img width="125" height="125" src={pele} alt="sa_page"></img>
            </div>

            
            <div className={style.geFlag}>
                <a href="/europe" target="_blank" rel="noreferrer">
                    <img width="325" height="325" src={geF} alt="eu_page"></img>
                </a>
            </div>

            <div className={style.einstein}>
                    <img width="200" height="220" src={einstein} alt="eu_page"></img>
            </div>
   
            <div className={style.chFlag}>
                <a href="/asia" target="_blank" rel="noreferrer">
                    <img width="325" height="325" src={chF} alt="eu_page"></img>
                </a>
            </div>

            <div className={style.lee}>
                    <img width="175" height="125" src={lee} alt="as_page"></img>
            </div>

            <div className={style.auFlag}>
                <a href="/oceania" target="_blank" rel="noreferrer">
                    <img width="325" height="325" src={auF} alt="eu_page"></img>
                </a>
            </div>

            <div className={style.franklin}>
                    <img width="150" height="150" src={franklin} alt="as_page"></img>
            </div>

            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200">
                {continents.map((continents, idx) => {
                    return (
                        <Tippy content={continents.name} key = {idx}>
                            <a href={continents.name}>
                                <path d={continents.d} fill={continents.fill} stroke={continents.stroke} />
                            </a>
                        </Tippy> )
                })}
            </svg>
        </div>
    );
}

export default HomePage;
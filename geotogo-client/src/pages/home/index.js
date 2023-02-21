import React from 'react';
import style from './style.module.scss';
import continents from './data';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';


const HomePage = () => {


    return (
        <div className={style.worldMap}>
            <div className={style.asia_cont}></div>
            {/* <div className={style.prompt}>Click on a continent to begin exploring!</div> */}
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
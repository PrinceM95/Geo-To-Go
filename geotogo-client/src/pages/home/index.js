import React from 'react';
import style from './style.module.scss';
import continents from './data';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';



const HomePage = () => {


    return (
        <div className={style.worldMap}>
		<div className={style.asia_cont}>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200">
{continents.map((continent, idx) => {
                    return <>
                    <Tippy content={continent.name}>
                    <path d={continent.d} fill={continent.fill} stroke={continent.stroke} />
                    </Tippy>
                    </> 
                })}
</svg>
		</div>
        </div>
        ); 
    }
    
    export default HomePage;
import style from './style.module.scss';
import countries from './data';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import StaticExample from '../../components/modal/index.js';


const AfricaPage = () => {

    return (
        <div className={style.africa}>
            {/* <StaticExample></StaticExample> */}
            <svg width="504" height="565" viewBox="0 0 504 565" xmlns="http://www.w3.org/2000/svg">
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

export default AfricaPage;
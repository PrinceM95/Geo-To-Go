import React from 'react';
import style from './style.module.scss';
import countries from './data';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useState } from 'react';
import asiaFF from '../../assets/africa_fact_fun.gif';
const AsiaPage = () => {
	const [data, setData] = useState({})

	const handleClick = (country) => {
		let url = `https://restcountries.com/v3.1/name/${country}`
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				console.log(data[0])
				setData(data[0])

			})
			.catch((error) => {
				console.log(error)
			})
	}
	return (
		<div className={style.asia}>

			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
				{countries.map((country, idx) => {
							return <>
								<Tippy content={country.name}>
									<path d={country.d} onClick= {()=> handleClick(country.name)} />
								</Tippy>
							</>
						})}
				</svg>	
			<div className={style.asiaDetail}>
				<h1>{data?.name?.common}</h1>
				<h3>Capital: {data?.capital}</h3>
				<h3>Languages: {data?.languages?.ara}</h3>
				<img src={data?.flags?.png} alt="flag pic"></img>
			</div>
			<div className={style.asiaFacts}>
    	<img src={asiaFF} className={style.asf} alt="logo"></img>
    </div>

		</div>
	);
}

export default AsiaPage;

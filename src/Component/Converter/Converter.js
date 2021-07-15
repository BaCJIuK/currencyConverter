import React, { useEffect, useRef, useState } from 'react'
import s from './converter.module.css'

const Converter = (props) => {
	const [firstRate, setFirstRate] = useState('')
	const [secondRate, setSecondRate] = useState('')
	const [firstValue, setFirstValue] = useState('')
	const [secondValue, setSecondValue] = useState('')


	return (
		<div className={s.converter}>
			<div className={s.converter__item}>
				<select onChange={(e) => setFirstRate(e.target.value)} >
					{props.valute.map(el => (
						<option Ф className={s.converter__value} value={el.Value}>{el.Name}</option>
					))}
				</select>
				<input onChange={(e) => setFirstValue(e.target.value)} />
				<input value={(firstRate / secondRate * firstValue).toFixed(2)} />
				<select onChange={(e) => setSecondRate(e.target.value)} >
					{props.valute.map(el => (
						el.CharCode == 'USD' ? <option A className={s.converter__value} value={el.Value} selected>{el.Name}</option> : <option id={el.NumCode} className={s.converter__value} value={el.Value}>{el.Name}</option>

					))}
				</select>


			</div>
			<div className={s.converter__item}>

			</div>
		</div >
	)

}


export default Converter
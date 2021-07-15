import React, { useEffect, useRef, useState } from 'react'
import s from './converter.module.css'

const Converter = (props) => {
	const [firstRate, setFirstRate] = useState('')
	const [secondRate, setSecondRate] = useState('')
	const [firstValue, setFirstValue] = useState('')
	const firstSelect = useRef()
	const secondSelect = useRef()


	useEffect(() => {
		setFirstRate(firstSelect.current.value)
		setSecondRate(secondSelect.current.value)
	}, [props])




	return (
		<div className={s.converter}>
			<div className={s.converter__item}>
				<select ref={firstSelect} onChange={(e) => setFirstRate(e.target.value)} >
					{props.valute.map(el => (
						el.CharCode == 'USD' ? <option selected key={el.NumCode} className={s.converter__value} value={el.Value}>{el.Name}</option> : <option key={el.NumCode} className={s.converter__value} value={el.Value}>{el.Name}</option>
					))}
				</select>
				<input onChange={(e) => setFirstValue(e.target.value)} />
			</div>
			<div className={s.converter__item}>=</div>
			<div className={s.converter__item}>
				<select ref={secondSelect} onChange={(e) => setSecondRate(e.target.value)} >
					{props.valute.map(el => (
						el.CharCode == 'USD' ? <option key={el.NumCode} className={s.converter__value} value={el.Value} selected>{el.Name}</option> : <option key={el.NumCode} className={s.converter__value} value={el.Value}>{el.Name}</option>

					))}
				</select>
				<input value={firstValue ? (firstRate / secondRate * firstValue).toFixed(2) : 0} />
			</div>
		</div >
	)

}


export default Converter
import React, { useRef, useState } from 'react'
import s from './converter.module.css'

const Converter = (props) => {


	return (
		<div className={s.converter}>
			<div className={s.converter__item}>
				<select >
					{props.valute.map(el => (
						<option className={s.converter__value}>{el.Name}</option>
					))}

				</select>

			</div>
			<div className={s.converter__item}>

			</div>
		</div>
	)

}


export default Converter
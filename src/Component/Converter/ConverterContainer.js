import React from 'react'
import Converter from './Converter'
import { getValute } from './../../Store/app-reducer'
import { connect } from 'react-redux'
import s from './converter.module.css'
import { useEffect } from 'react'

const ConverterContainer = (props) => {
	let valute = Object.values(props.valute)
	return (
		<div>
			<Converter valute={valute} />
		</div>
	)

}

const mapStateToProps = (state) => {
	return {
		valute: state.valute.valute
	}
}


export default connect(mapStateToProps, {})(ConverterContainer)
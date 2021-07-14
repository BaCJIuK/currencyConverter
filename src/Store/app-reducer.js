import * as axios from 'axios'


const SET_VALUTE = 'SET_VALUTE'

let initialState = {
}

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case (SET_VALUTE):
			return (
				{ ...action.valute }
			)
		default: return state
	}
}

export const setValute = (valute) => {
	return ({ type: SET_VALUTE, valute })
}


export const getValute = () => dispatch => {
	axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
		.then(response => dispatch(setValute(response.data.Valute)))
}



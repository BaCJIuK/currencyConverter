import * as axios from 'axios'


const SET_VALUTE = 'SET_VALUTE'
const SET_PREV_VALUTE = 'SET_PREV_VALUTE'

let initialState = {
	valute: {},
	prevValute: {}
}

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case (SET_VALUTE):

			return (
				{ valute: { ...action.valute }, prevValute: { ...action.prevValute } }
			)

		default: return state
	}
}

export const setValute = (valute, prevValute) => {
	return ({ type: SET_VALUTE, valute, prevValute })
}



export const getValute = () => dispatch => {

	/* axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
		.then(response => {
			dispatch(setValute(response.data.Valute))
			dispatch(getPreviousValue(response.data.PreviousURL))
		}) */

	axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
		.then(response => {

			dispatch(getPreviousValue(response.data.PreviousURL, response.data.Valute))
		})
}

export const getPreviousValue = (prevUrl, currentValute) => (dispatch) => {
	axios.get(prevUrl)
		.then(response => {
			dispatch(setValute(currentValute, response.data.Valute))
		})
}



import axios from 'axios'

const SET_VALUTE = 'SET_VALUTE'


interface valuteDIscriptionType {
	ID: string
	NumCode: string
	CharCode: string
	Nominal: number
	Name: string
	Value: number
	Previous: boolean
}
interface ValueType {
	[valute: string]: valuteDIscriptionType
}
interface prevValuteType {
	[prevValute: string]: valuteDIscriptionType
}
/* interface initialStateType {
	valute: ValueType
	prevValute: prevValuteType
} */

let initialState = {
	valute: {} as ValueType,
	prevValute: {} as prevValuteType
}

type initialStateType = typeof initialState



export const appReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
	switch (action.type) {
		case (SET_VALUTE):

			return (
				{ valute: { ...action.valute }, prevValute: { ...action.prevValute } }
			)

		default: return state
	}
}

interface setValuteType {
	type: 'SET_VALUTE'
	valute: ValueType
	prevValute: prevValuteType
}
type ActionType = setValuteType


export const setValute = (valute: ValueType, prevValute: prevValuteType): setValuteType => {
	return ({ type: SET_VALUTE, valute, prevValute })
}



export const getValute = () => (dispatch: any) => {
	axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
		.then(response => {

			dispatch(getPreviousValue(response.data.PreviousURL, response.data.Valute))
		})
}

export const getPreviousValue = (prevUrl: string, currentValute: ValueType) => (dispatch: any) => {
	axios.get(prevUrl)
		.then(response => {
			dispatch(setValute(currentValute, response.data.Valute))
		})
}



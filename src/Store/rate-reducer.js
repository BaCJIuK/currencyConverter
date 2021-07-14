
const SET_FAVORITE_CURRENCY = 'SET_FAVORITE_CURRENCY'
const REMOVE_FROM_FAVORITE = 'REMOVE_FROM_FAVORITE'
const SET_CURRENCY_TO_LOCAL_STORAGE = 'SET_CURRENCY_TO_LOCAL_STORAGE'


const initialState = {
	favoriteCurrency: JSON.parse(localStorage.localFavoriteCurrency.length) == 0 ? [] : JSON.parse(localStorage.localFavoriteCurrency)
}

export const rateReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_FAVORITE_CURRENCY:
			if (state.favoriteCurrency.includes(action.currency)) return { ...state }
			return { ...state, favoriteCurrency: [...state.favoriteCurrency, action.currency] }
		case REMOVE_FROM_FAVORITE:
			state.favoriteCurrency.forEach((elem, index) => {
				if (elem.ID == action.currency.ID) {
					state.favoriteCurrency.splice(index, 1)
				}
			})
			return { ...state, favoriteCurrency: [...state.favoriteCurrency] }
		case SET_CURRENCY_TO_LOCAL_STORAGE:
			localStorage.localFavoriteCurrency = JSON.stringify([...state.favoriteCurrency])
		default: return { ...state }
	}
}



export const setFavoriteCurrency = (currency) => {
	return { type: SET_FAVORITE_CURRENCY, currency }
}

export const setCurrencyToLocalStorage = () => {
	return { type: SET_CURRENCY_TO_LOCAL_STORAGE, }
}

export const removeFromFavorite = (currency) => {
	return { type: REMOVE_FROM_FAVORITE, currency }
}

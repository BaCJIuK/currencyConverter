import React from 'react'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { rateReducer } from './rate-reducer'
import { appReducer } from './app-reducer'

let reducers = combineReducers({
	rate: rateReducer,
	valute: appReducer
})


let store = createStore(reducers, applyMiddleware(thunk))

export default store
import React from 'react'
import { connect } from 'react-redux'
import { setFavoriteCurrency, removeFromFavorite, setCurrencyToLocalStorage } from '../../Store/rate-reducer'
import RateTable from './RateTable'



const RateTableContainer = (props) => {
    let valute = Object.values(props.valute)

    let changeToFavorite = (elem) => {
        props.setFavoriteCurrency(elem)
        props.setCurrencyToLocalStorage()
    }

    const removeFromFavorite = (elem) => {
        props.removeFromFavorite(elem)
        props.setCurrencyToLocalStorage()
    }

    return (
        <RateTable
            changeToFavorite={changeToFavorite}
            removeFromFavorite={removeFromFavorite}
            valute={valute}
            favoriteCurrency={props.favoriteCurrency}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        valute: state.valute,
        favoriteCurrency: state.rate.favoriteCurrency
    }
}

export default connect(mapStateToProps, { setFavoriteCurrency, removeFromFavorite, setCurrencyToLocalStorage })(RateTableContainer)
import React from 'react'
import { connect } from 'react-redux'
import { setFavoriteCurrency, removeFromFavorite, setCurrencyToLocalStorage } from '../../Store/rate-reducer'
import RateTable from './RateTable'



const RateTableContainer = (props) => {

    let valute = Object.values(props.valute)
    let prevValute = Object.values(props.prevValute)

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
            prevValute={prevValute}
            favoriteCurrency={props.favoriteCurrency}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        valute: state.valute.valute,
        prevValute: state.valute.prevValute,
        favoriteCurrency: state.rate.favoriteCurrency,
    }
}

export default connect(mapStateToProps, { setFavoriteCurrency, removeFromFavorite, setCurrencyToLocalStorage })(RateTableContainer)
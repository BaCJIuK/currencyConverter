import React from 'react'
import { useEffect } from 'react';
import s from './RateTable.module.css'
import arrowUp from './../../img/arrowUp.png'
import arrowDown from './../../img/arrowDown.png'


const RateTable = (props) => {

    let calculateDifferent = (current, previous) => {
        let result = ((current - previous) / current * 100).toFixed(2)
        if (result > 0) {
            return (
                <div>{result}%<img src={arrowUp} className={s.arrow} /></div>
            )
        } else {
            return (
                <div>{result}%<img src={arrowDown} className={s.arrow} /></div>
            )
        }

    }

    console.log(calculateDifferent(100, 10))
    calculateDifferent(100, 10)
    return (
        <div className={s.converter_wrapper}>
            <div className={s.favoriteCurrencyWrapper}>
                {props.favoriteCurrency ?
                    props.favoriteCurrency.map(elem => (
                        <div className={`${s.itemWrapper} ${s.itemWrapper__changed}`}>
                            <div className={`${s.favoreteCurrency__item} ${s.item__Name}`} >{elem.Name}</div>
                            <div className={`${s.favoreteCurrency__item} ${s.item__value}`}>{elem.Value.toFixed(2)}</div>
                            <div className={`${s.item} ${s.item__value}`}>{props.prevValute.map(el => el.CharCode == elem.CharCode ? calculateDifferent(elem.Value, el.Value) : '')}</div>
                            <div className={`${s.item} ${s.item__button}`}><button onClick={(e) => props.removeFromFavorite(elem)}>убрать из избранного</button></div>
                        </div>
                    ))

                    : ''
                }</div>
            <div>
                {props.valute.map((elem) => (
                    < div className={s.itemWrapper} >
                        <div className={`${s.item} ${s.item__Name}`}>{elem.Name}</div>
                        <div className={`${s.item} ${s.item__value}`}>{elem.Value.toFixed(2)} </div>
                        <div className={`${s.item} ${s.item__value}`}>{props.prevValute.map(el => el.CharCode == elem.CharCode ? calculateDifferent(elem.Value, el.Value) : '')}</div>
                        <div className={`${s.item} ${s.item__button}`}><button onClick={(e) => props.changeToFavorite(elem)}>В избранное</button></div>
                    </div>
                ))
                }
            </div>
        </div >
    )
}






export default RateTable
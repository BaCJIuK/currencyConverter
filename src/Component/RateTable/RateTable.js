import React from 'react'
import s from './RateTable.module.css'


const RateTable = (props) => {

    return (
        <div className={s.converter_wrapper}>
            <div className={s.favoriteCurrencyWrapper}>
                {props.favoriteCurrency ?
                    props.favoriteCurrency.map(elem => (
                        <div className={`${s.itemWrapper} ${s.itemWrapper__changed}`}>
                            <div className={`${s.favoreteCurrency__item} ${s.item__Name}`} >{elem.Name}</div>

                            <div className={`${s.favoreteCurrency__item} ${s.item__value}`}>{elem.Value.toFixed(2)}</div>
                            <div className={`${s.item} ${s.item__button}`}><button onClick={(e) => props.removeFromFavorite(elem)}>убрать из избранного</button></div>
                        </div>
                    ))

                    : ''
                }</div>
            <div>
                {props.valute.map((elem) => (
                    < div className={s.itemWrapper} >

                        <div className={`${s.item} ${s.item__Name}`}>{elem.Name}</div>
                        <div className={`${s.item} ${s.item__value}`}>{elem.Value.toFixed(2)}</div>
                        <div className={`${s.item} ${s.item__button}`}><button onClick={(e) => props.changeToFavorite(elem)}>В избранное</button></div>
                    </div>
                ))
                }
            </div>
        </div >
    )
}






export default RateTable
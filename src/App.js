import s from './App.module.css';
import { BrowserRouter, NavLink, Route } from 'react-router-dom'
import RateTableContainer from './Component/RateTable/RateTableContainer';
import { useEffect } from 'react';
import { getValute } from './Store/app-reducer';
import { connect } from 'react-redux';
import ConverterContainer from './Component/Converter/ConverterContainer';


const App = (props) => {

  useEffect(() => {
    props.getValute()
  }, [])

  return (
    <BrowserRouter>
      <div className={s.wrapper}>
        <div className={s.navMenu}>
          <div className={s.converter}><NavLink to='/Converter'>Конвертер валют</NavLink></div>
          <div className={s.rateTable}><NavLink to='/ratetable'>Курс валют</NavLink></div>
        </div>
        <Route path='/Converter' render={() => <ConverterContainer />} />
        <Route path='/ratetable' render={() => <RateTableContainer />} />
      </div>
    </BrowserRouter>
  );
}



export default connect(null, { getValute })(App);

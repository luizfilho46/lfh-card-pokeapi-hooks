import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App({}) {
  const newValue = useSelector( state => {
    return state.clickState.newValue
  } )
  const dispatch = useDispatch()
  return (
    <div className="App" style={{ paddingTop: '10px' }}>
      <input type="text" />
      <button onClick={() => dispatch({ type: 'CLICK_UPDATE_VALUE', payload: 'Novo Estado'})}>
        Clique no botão
      </button>
      <h1>{ newValue }</h1>
    </div>
  );
}

export default App;

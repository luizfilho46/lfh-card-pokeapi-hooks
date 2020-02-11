import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App({}) {

  const [inputValue, setInputValue] = useState('Pokemons')

  const newValue = useSelector( state => {
    return state.clickState.newValue
  } )
  const dispatch = useDispatch()
  return (
    <div className="App" style={{ paddingTop: '10px' }}>
      <input type="text" onChange={(e) => setInputValue(e.target.value)}/>
      <button onClick={() => dispatch({ type: 'CLICK_UPDATE_VALUE', payload: inputValue})}>
        Pokemon Escolhido
      </button>
      <h1>{ newValue }</h1>
    </div>
  );
}

export default App;

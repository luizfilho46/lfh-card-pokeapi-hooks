import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Card from './components/card'

function App() {

  const [inputValue, setInputValue] = useState('Pokemons')

  const newValue = useSelector( state => {
    return state.clickState.newValue
  } )
  const dispatch = useDispatch()
  return (
    <div className="App">
      <Card />
    </div>
  );
}

export default App;

import React, {  useState } from 'react'
import Request from '../hooks/index'
import { ERROR } from '../actions/actionTypes'
import './card.css'

function Card() {
    
    const [pokemon, setPokemon] = useState('charizard')

    const [{ status, response }, request] = Request(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
        {
            verb: `get`
        }
    )
        
    return (
        <div className="FlipCard">
            <input type="text" onChange={(e) => setPokemon(e.target.value)} value={pokemon}/>
            <button onClick={request}>
                Eu escolho você...
            </button>
            <div className="FlipCardInner">
                <div className="FlipCardFront">
                    <img src={status === ERROR ? null : (response ? response.data.sprites.back_shiny : null)} alt="pokemon shiny" />
                    <div className="Container">
                        <h4>{status === ERROR ? null : (response ? response.data.name : null)}</h4>
                    </div>
                </div>
                <div className="FlipCardBack">
                <img src={status === ERROR ? null : (response ? response.data.sprites.front_default : null)} alt="pokemon default" />
                    <div className="Container">
                        <h4>{status === ERROR ? null : (response ? response.data.types[0].type.name: null)}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
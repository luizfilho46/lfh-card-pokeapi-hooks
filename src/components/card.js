import React, { useEffect, useState } from 'react'

import './card.css'

function Card() {
    return (
        <div className="FlipCard">
            <input />
            <button>
                Eu escolho você...
            </button>
            <div className="FlipCardInner">
                <div className="FlipCardFront">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png" />
                    <div className="Container">
                        <h4>Charizard</h4>
                    </div>
                </div>
                <div className="FlipCardBack">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/6.png" />
                    <div className="Container">
                        <h4>Charizard</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
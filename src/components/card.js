import React from 'react'

import './card.css'

function Card() {
    return (
        <div className="Card">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png" />
            <div className="Container">
                <h4>Charizard</h4>
            </div>
            <p>Card</p>
        </div>
    )
}

export default Card
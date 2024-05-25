import React from "react";
import './PokemonCard.css'

function PokemonCard({ children, selected, onClick, pokemon }) {

    const entryNumber = pokemon.entry.toString().padStart(4, '0')

    const typeColors = {
        'bug': '#C6D16E',
        'dark': '#A29288',
        'dragon': '#A27DFA',
        'electric': '#FAE078',
        'fairy': '#F4BDC9',
        'fighting': '#D67873',
        'fire': '#F5AC78',
        'flying': '#C6B7F5',
        'ghost': '#A292BC',
        'grass': '#A7DB8D',
        'ground': '#E0C068',
        'ice': '#BCE6E6',
        'normal': '#C6C6A7',
        'poison': '#C183C1',
        'psychic': '#FA92B2',
        'rock': '#D1C17D',
        'steel': '#D1D1E0',
        'water': '#9DB7F5'
    };
    const getColor = (type) => typeColors[type] || '#CCC';
    const backgroundColor = pokemon.types.length === 1 ?
        { backgroundColor: getColor(pokemon.types[0]) } :
        { background: `linear-gradient(to right, ${getColor(pokemon.types[0])}, ${getColor(pokemon.types[1])})` };

    return (
        <div className="PokemonCard-container" onClick={onClick}>
            <img className={`PokemonCard-image ${selected ? 'selected' : ''}`} src={pokemon.img} alt={pokemon.name} />
            <div className="PokemonCard" style={backgroundColor} >
                {children}
                <p className="pokemon-number">N.º {entryNumber}</p>
                <p className="pokemon-name">{pokemon.name}</p>
                <div className="types-container">
                    {pokemon.types.map((type, index) => (
                        <span key={index} className={`pokemon-type ${type}`}>
                            {type}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export { PokemonCard }
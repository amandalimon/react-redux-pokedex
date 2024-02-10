import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { PlayButton } from '../PlayButton';
import "./PokemonDetails.css"
import { setShowShiny } from "../../slices/dataSlice";

function PokemonDetails() {
    const pokemons = useSelector((state) => state.data.pokemons);
    const selectedPokemon = useSelector((state) => state.data.selectedPokemon)
    const pokemon = pokemons[selectedPokemon]

    const showShiny = useSelector((state) => state.data.showShiny);
    const dispatch = useDispatch();
    const toggleImage = () => {
        dispatch(setShowShiny(!showShiny));
    }

    const play = () => { new Audio(pokemon.cries).play() }

    const idTransform = pokemon?.id.toString().padStart(3, '0')

    return (
        <div className="PokemonDetails-container">
            <div className="PokemonDetails">
                <section className="details">
                    <div className="images">
                        {showShiny ? (<img src={pokemon?.shiny} alt={pokemon?.name} />) : (<img src={pokemon?.img} alt={pokemon?.name} />)}
                        <button onClick={toggleImage}>
                            {showShiny ? 'Show Normal' : 'Show Shiny'}
                        </button>
                    </div>
                    <div className="info">
                        <div className="name">
                            <span>
                                <PlayButton onClick={play} />
                                {pokemon?.name.toUpperCase()}
                            </span>
                            <p># {idTransform}</p>
                        </div>
                        <div className="types">
                            {pokemon?.types.map((type, index) => (
                                <span key={index} className={`pokemon-type ${type}`}>
                                    {type}
                                </span>
                            ))}
                        </div>
                        <div className="sizes">
                            <div>
                                <p>{(pokemon?.weight / 10).toFixed(1)} kg</p>
                                <span>Weight</span>
                            </div>
                            <div>
                                <p>{(pokemon?.height / 10).toFixed(1)} m</p>
                                <span>Height</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="stats">
                        <p>Stats</p>
                        <span>hp: {pokemon?.hp}</span>
                        <span>att: {pokemon?.att}</span>
                        <span>def: {pokemon?.def}</span>
                        <span>spAtt: {pokemon?.spAtt}</span>
                        <span>spDef: {pokemon?.spDef}</span>
                        <span>speed: {pokemon?.speed}</span>
                    </div>
                </section>

                <section className="desc">
                    <p>{pokemon?.desc}</p>
                </section>

            </div>
        </div>
    )
}

export { PokemonDetails }
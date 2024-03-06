import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedPokemon, setShowShiny } from "../../slices/dataSlice";
import { PlayButton } from "../../components/PlayButton"
import { Spin } from 'antd';
import "./PokemonDetails.css"

function PokemonDetails() {
    const loading = useSelector((state) => state.ui.loading);
    const pokemons = useSelector((state) => state.data.pokemons);
    const selectedPokemon = useSelector((state) => state.data.selectedPokemon)
    const showShiny = useSelector((state) => state.data.showShiny);
    const currentRegion = useSelector((state) => state.region.currentRegion)

    const dispatch = useDispatch();

    const toggleImage = () => {
        dispatch(setShowShiny(!showShiny));
    }

    const pokemon = pokemons[selectedPokemon]
    const entryNumber = pokemon?.entry.toString().padStart(4, '0')
    const play = () => { new Audio(pokemon.cries).play() }

    useEffect(() => {
        dispatch(setSelectedPokemon(1))
    }, [currentRegion])

    return (
        <div className="PokemonDetails-container">
            <div className="PokemonDetails">
                {loading ? <Spin spinning size='large' /> : (
                    <>
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
                                    <p>N.º {entryNumber}</p>
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
                    </>
                )}
            </div>
        </div>
    )
}

export { PokemonDetails }
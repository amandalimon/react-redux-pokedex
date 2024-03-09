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
    const currentRegion = useSelector((state) => state.region.currentRegion)
    const showShiny = useSelector((state) => state.data.showShiny);

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
                {loading ? (<Spin spinning size="large" className="spin" />) : (
                    <>
                        <section className="header">
                            <p>N.º {entryNumber}</p>
                            <p> <PlayButton onClick={play} />{pokemon?.name.toUpperCase()}</p>
                            <div className="types">
                                {pokemon?.types.map((type, index) => (
                                    <span key={index} className={`pokemon-type ${type}`}>
                                        {type}
                                    </span>
                                ))}
                            </div>
                        </section>
                        <section className="body">
                            <div className="sprites">
                                {showShiny ? (<img src={pokemon?.shiny} alt={pokemon?.name} />) : (<img src={pokemon?.img} alt={pokemon?.name} />)}
                                <button onClick={toggleImage}>
                                    {showShiny ? 'Show Normal' : 'Show Shiny'}
                                </button>
                            </div>
                            <div className="sizes">
                                <div>
                                    <p>Weight</p>
                                    <span>{(pokemon?.weight / 10).toFixed(1)} kg</span>
                                </div>
                                <div>
                                    <p>Height</p>
                                    <span>{(pokemon?.height / 10).toFixed(1)} m</span>
                                </div>
                            </div>

                            <div className="stats">
                                <div>
                                    <span>hp</span>
                                    <span>{pokemon?.hp}</span>
                                </div>
                                <div>
                                    <span>att</span>
                                    <span>{pokemon?.att}</span>
                                </div>
                                <div>
                                    <span>def</span>
                                    <span>{pokemon?.def}</span>
                                </div>
                                <div>
                                    <span>spAtt</span>
                                    <span>{pokemon?.spAtt}</span>
                                </div>
                                <div>
                                    <span>spDef</span>
                                    <span>{pokemon?.spDef}</span>
                                </div>
                                <div>
                                    <span>speed</span>
                                    <span>{pokemon?.speed}</span>
                                </div>
                            </div>
                        </section>
                        <section className="footer">
                            <p>{pokemon?.desc}</p>
                        </section>
                    </>
                )}
            </div>
        </div>
    )
}

export { PokemonDetails }
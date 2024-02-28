import React from "react";
import { PokemonMenu } from "../../Components/Menu";
import { PokemonList } from "../../Components/List"
import "./PokemonsContainer.css"

function PokemonsContainer() {
    return (
        <div className="PokemonsContainer">
            <PokemonMenu />
            <PokemonList />
        </div>
    )
}

export { PokemonsContainer }
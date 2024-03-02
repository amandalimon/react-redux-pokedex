import React from "react";
import { useSelector } from 'react-redux';
import { PokemonMenu } from "../../components/Menu";
import { PokemonList } from "../../components/List"
import { Spin } from 'antd';
import "./PokemonsContainer.css"

function PokemonsContainer() {
    const loading = useSelector((state) => state.ui.loading);

    return (
        <div className="PokemonsContainer">
            <PokemonMenu />
            {loading ? (<Spin spinning size='large' className='spin' />) : (
                <PokemonList />
            )}
        </div>
    )
}

export { PokemonsContainer }
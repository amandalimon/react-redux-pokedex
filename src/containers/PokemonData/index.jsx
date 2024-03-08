import React from "react";
import { useSelector } from 'react-redux';
import { PokemonMenu } from "../../components/Menu";
import { PokemonList } from "../../components/List"
import { Spin } from 'antd';
import "./PokemonData.css"

function PokemonData() {
    const loading = useSelector((state) => state.ui.loading);

    return (
        <div className="PokemonData-container">
            <div className="PokemonData">
                <PokemonMenu />
                {loading ? (<Spin spinning size='large' className='spin' />) : (
                    <PokemonList />
                )}
            </div>
        </div>
    )
}

export { PokemonData }
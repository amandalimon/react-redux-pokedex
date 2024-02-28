import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentRegion } from "../../slices/regionSlice";
import { fetchPokemonData } from "../../slices/dataSlice";
import { Menu } from "antd";


function PokemonMenu() {

    const items = [
        {
            label: 'Kanto',
            key: 'kanto',
        },
        {
            label: 'Johto',
            key: 'johto',
            disabled: true,
        },
        {
            label: 'Hoenn',
            key: 'hoenn',
            disabled: true,
        },
        {
            label: 'Sinnoh',
            key: 'sinnoh',
            disabled: true,
        },
        {
            label: 'Unova',
            key: 'unova',
            disabled: true,
        },
        {
            label: 'Kalos',
            key: 'kalos',
            disabled: true,
        },
        {
            label: 'Alola',
            key: 'alola',
            disabled: true,
        },
        {
            label: 'Paldea',
            key: 'paldea',
            disabled: true,
        },
    ];
    

    return <Menu items={items} mode="horizontal" />;
}

export { PokemonMenu }
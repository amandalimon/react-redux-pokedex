import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentRegion } from '../../slices/regionSlice';
import { Menu } from 'antd';

const PokemonMenu = () => {
    const dispatch = useDispatch();

    const currentRegion = useSelector((state) => state.region.currentRegion)

    const regions = [
        {
            label: 'Kanto',
            key: 'Kanto',
            endpoint: 'pokemon?limit=151',
        },
        {
            label: 'Johto',
            key: 'Johto',
            endpoint: 'pokemon?limit=100&offset=151',
        },
        {
            label: 'Hoenn',
            key: 'Hoenn',
            endpoint: 'pokemon?limit=135&offset=251',
        },
        {
            label: 'Sinnoh',
            key: 'Sinnoh',
            endpoint: 'pokemon?limit=107&offset=386',
        },
        {
            label: 'Unova',
            key: 'Unova',
            endpoint: 'pokemon?limit=156&offset=493',
        },
        {
            label: 'Kalos',
            key: 'Kalos',
            endpoint: 'pokemon?limit=72&offset=649',
        },
        {
            label: 'Alola',
            key: 'Alola',
            endpoint: 'pokemon?limit=88&offset=721',
        },
        {
            label: 'Galar',
            key: 'Galar',
            endpoint: 'pokemon?limit=89&offset=809',
        },
    ];

    const handleSwitchRegion = (endpoint) => {
        dispatch(setCurrentRegion(endpoint));
    };

    const onClick = ({ key }) => {
        const region = regions.find(region => region.key === key);
        if (region) {
            handleSwitchRegion(region.endpoint);
        }
    };

    const menuItems = regions.map(region => ({
        ...region,
        onClick: () => handleSwitchRegion(region.endpoint),
    }));

    return (
        <div>
            <p>Select a Region:</p>
            <Menu onClick={onClick} selectedKeys={[currentRegion]} mode="horizontal" items={menuItems} />
        </div>
    );
};

export { PokemonMenu };
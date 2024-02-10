import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPokemonData } from './slices/dataSlice';
import { PokemonList } from './Components/List';
import { PokemonDetails } from './Components/PokemonDetails';
import { Spin } from 'antd';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.ui.loading);

  useEffect(() => {
    dispatch(fetchPokemonData())
  }, [])

  return (
    <div className="App">
      {loading ? (<Spin spinning size='large' fullscreen />) : (
        <>
          <PokemonList />
          <PokemonDetails />
        </>
      )}
    </div>
  );
};

export default App;



import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPokemonData } from './slices/dataSlice';
import { PokemonsContainer } from './containers/PokemonsContainer';
import { PokemonDetails } from './containers/PokemonDetails';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const currentRegion = useSelector((state) => state.region.currentRegion)

  useEffect(() => {
    dispatch(fetchPokemonData(currentRegion))
  }, [currentRegion])

  return (
    <div className="App">
      <PokemonsContainer />
      <PokemonDetails />
    </div>
  );
};

export default App;



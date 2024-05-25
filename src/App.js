import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonData } from './slices/dataSlice';
import { PokemonData } from './containers/PokemonData';
import { PokemonDetails } from './containers/PokemonDetails';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const currentRegion = useSelector((state) => state.region.currentRegion)

  useEffect(() => {
    dispatch(fetchPokemonData(currentRegion))
  }, [currentRegion, dispatch])

  return (
    <div className="App">
          <PokemonData />
          <PokemonDetails />
    </div>
  );
}

export default App;

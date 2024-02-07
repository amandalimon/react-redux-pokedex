import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchPokemonWithDetails } from './slices/dataSlice';
import { PokemonList } from './Components/List/PokemonList'
import { Spin } from 'antd';
import './App.css';

function App() {
  const pokemons = useSelector(
    (state) => state.data.pokemons, shallowEqual
  );

  const loading = useSelector((state) => state.ui.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonWithDetails())
  }, [])

  return (
    <div className="App">
      {loading ? (
        <Spin spinning size='large' fullscreen />
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div >
  );
}

export default App;



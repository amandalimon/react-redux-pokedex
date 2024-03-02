import { PokemonCard } from '../Card';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedPokemon } from '../../slices/dataSlice';
import './PokemonList.css'

function PokemonList() {
    const pokemons = useSelector((state) => state.data.pokemons);
    const selectedPokemon = useSelector((state) => state.data.selectedPokemon)

    const dispatch = useDispatch();

    const handlePokemonClick = (id) => {
        dispatch(setSelectedPokemon(id));
    };

    return (
        <div className='PokemonList'>
            {Object.keys(pokemons).map(id => (
                <PokemonCard
                    key={id}
                    selected={id === selectedPokemon}
                    onClick={() => handlePokemonClick(id)}
                    pokemon={{ ...pokemons[id], id: id }}
                />
            ))}
        </div>
    );
};

export { PokemonList }
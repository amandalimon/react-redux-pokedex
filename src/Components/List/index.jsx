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

    // console.log(pokemons)

    return (
        <div className='PokemonList-container'>
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
        </div>
    );
};

export { PokemonList }

// <div className="PokemonList"> {
//     pokemons.map((pokemon) => {
//         return (
//             <PokemonCard
//                 key={pokemon.id}
//                 id={pokemon.id}
//                 name={pokemon.name}
//                 image={pokemon.sprites?.front_default}
//                 types={pokemon.types}
//                 favorite={pokemon.favorite}
//                 cries={pokemon.cries.legacy}
//             />
//         )
//     })}
// </div>
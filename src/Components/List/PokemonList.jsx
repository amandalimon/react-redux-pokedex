import { PokemonCard } from "../Card/Card";
import './PokemonList.css'

function PokemonList({ pokemons }) {
    return (
        <div className="PokemonList"> {
            pokemons.map((pokemon) => {
                return (
                    <PokemonCard
                        key={pokemon.name}
                        name={pokemon.name}
                        image={pokemon.sprites?.front_default}
                        types={pokemon.types}
                        id={pokemon.id}
                        favorite={pokemon.favorite}
                    />
                )
            })}
        </div>
    );
};

PokemonList.defaultProps = {
    pokemons: Array(10).fill(''),
}

export { PokemonList }
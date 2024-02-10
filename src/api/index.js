import axios from 'axios';

export const getPokemon = async (num) => {
    try {
        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${num}`;
        const pokemonRes = await axios.get(pokemonUrl);
        const pokemon = pokemonRes.data;
        
        const speciesUrl = pokemon.species.url;
        const speciesRes = await axios.get(speciesUrl);
        const speciesData = speciesRes.data;

        return { ...pokemon, speciesData };
    } catch (error) {
        console.error("Error fetching Pokemon:", error);
        return null;
    }
};
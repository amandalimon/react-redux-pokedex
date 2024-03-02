import axios from 'axios';

const getPokemon = async (currentRegion) => {
    try {
        // Hacer el primer llamado para obtener la lista de Pokémon
        const pokemonEndpoint = `https://pokeapi.co/api/v2/${currentRegion}`;
        const pokemonRes = await axios.get(pokemonEndpoint);
        const pokemonList = pokemonRes.data;

        // Hacer el segundo llamado para obtener información adicional para cada Pokémon
        const pokemonListData = await Promise.all(pokemonList.results.map(async (pokemon) => {
            const pokemonUrl = pokemon.url;
            const pokemonDataRes = await axios.get(pokemonUrl);
            const pokemonData = pokemonDataRes.data;

            // Hacer un tercer llamado para obtener información adicional, como la URL de la especie
            const speciesUrl = pokemonData.species.url;
            const speciesRes = await axios.get(speciesUrl);
            const speciesData = speciesRes.data;

            return { ...pokemonData, speciesData };
        }));
        return pokemonListData;
    } catch (error) {
        console.error("Error fetching Pokemon:", error);
        return null;
    }
};

export { getPokemon };
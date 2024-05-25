import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemon } from "../api";
import { setLoading } from "./uiSlice";

const initialState = {
    pokemons: {},
    selectedPokemon: 1,
    showShiny: false,
};

export const fetchPokemonData = createAsyncThunk(
    'pokemon/fetchPokemonData',
    async (currentRegion, { dispatch }) => {
        dispatch(setLoading(true));
        const pokemonData = {};
        try {
            const pokemonList = await getPokemon(currentRegion);

            for (let i = 0; i < pokemonList.length; i++) {
                const pokemon = pokemonList[i];

                const englishFlavorTextEntry = pokemon.speciesData.flavor_text_entries.find(entry => entry.language.name === 'en');
                const englishDescription = englishFlavorTextEntry ? englishFlavorTextEntry.flavor_text : 'No description available';

                pokemonData[i + 1] = {
                    id: pokemon.id,
                    name: pokemon.name,
                    img: pokemon.sprites.front_default,
                    shiny: pokemon.sprites.front_shiny,
                    types: pokemon.types.map(type => type.type.name),
                    abilities: pokemon.abilities.map(ability => ability.ability.name),
                    cries: pokemon.cries.legacy || pokemon.cries.latest,
                    hp: pokemon.stats[0].base_stat,
                    att: pokemon.stats[1].base_stat,
                    def: pokemon.stats[2].base_stat,
                    spAtt: pokemon.stats[3].base_stat,
                    spDef: pokemon.stats[4].base_stat,
                    speed: pokemon.stats[5].base_stat,
                    weight: pokemon.weight,
                    height: pokemon.height,
                    desc: englishDescription,
                    entry: pokemon.speciesData.pokedex_numbers[0].entry_number
                };
            }
            console.log (pokemonData)
            dispatch(setPokemons(pokemonData));
            dispatch(setLoading(false));
        } catch (error) {
            console.error('Error fetching Pokemon:', error);
            throw error;
        }
    }
);

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload;
        },
        setFavorite: (state, action) => {
            const pokemonIndex = state.pokemons.findIndex(
                (pokemon) => (pokemon.id === action.payload.pokemonId))
            if (pokemonIndex >= 0) {
                const isFavorite = state.pokemons[pokemonIndex].favorite;
                state.pokemons[pokemonIndex].favorite = !isFavorite
            }
        },
        setSelectedPokemon: (state, action) => {
            state.selectedPokemon = action.payload;
        },
        setShowShiny: (state, action) => {
            state.showShiny = action.payload;
        },
    },
});

export const {
    setPokemons,
    setFavorite,
    setSelectedPokemon,
    setShowShiny,
    setCurrentRegion
} = dataSlice.actions;

export default dataSlice.reducer;
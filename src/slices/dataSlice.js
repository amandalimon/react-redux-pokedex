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
    async (_, { dispatch }) => {
        dispatch(setLoading(true))
        const pokemonData = {};
        const pokemonCount = 251;

        try {
            for (let i = 1; i <= pokemonCount; i++) {
                const pokemon = await getPokemon(i);
                pokemonData[i] = {
                    id: pokemon.id,
                    name: pokemon.name,
                    img: pokemon.sprites.front_default,
                    shiny: pokemon.sprites.front_shiny,
                    types: pokemon.types.map(type => type.type.name),
                    cries: pokemon.cries.legacy,
                    hp: pokemon.stats[0].base_stat,
                    att: pokemon.stats[1].base_stat,
                    def: pokemon.stats[2].base_stat,
                    spAtt: pokemon.stats[3].base_stat,
                    spDef: pokemon.stats[4].base_stat,
                    speed: pokemon.stats[5].base_stat,
                    weight: pokemon.weight,
                    height: pokemon.height,
                    desc: pokemon.speciesData.flavor_text_entries[8].flavor_text
                };
            }
            dispatch(setPokemons(pokemonData))
            dispatch(setLoading(false))
        } catch (error) {
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
        }
    },
});

export const {
    setPokemons,
    setFavorite,
    setSelectedPokemon,
    setShowShiny,
} = dataSlice.actions;

export default dataSlice.reducer;
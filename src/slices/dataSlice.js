import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemon, getPokemonDetails } from "../api";
import { setLoading } from "./uiSlice";

const initialState = {
    pokemons: [],
    pokemonsFiltered: [],
};

export const fetchPokemonWithDetails = createAsyncThunk(
    'data/fetchPokemonWithDetails',
    async (_, { dispatch }) => {
        dispatch(setLoading(true))
        const pokemonsRes = await getPokemon();
        const pokemonsDetailed = await Promise.all(
            pokemonsRes.map((pokemon) => getPokemonDetails(pokemon))
        );
        dispatch(setPokemons(pokemonsDetailed));
        dispatch(setLoading(false));
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
    },
});

export const { setPokemons, setFavorite } = dataSlice.actions;

export default dataSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        current: '',
        next: '',
        previous: '',
        pokemons: [],
        pokemonSearch: [],
        isLoading: false,
        search: false,
    },
    reducers: {
        startLoadingPokemons: ( state ) => {
            state.isLoading = true;
        },
        setPokemons: ( state, action ) => {
            state.isLoading = false;
            state.pokemons = action.payload.pokemons || '';
            state.current = action.payload.current || '';
            state.next = action.payload.next || '';
            state.previous = action.payload.previous || '';
            state.pokemonSearch = action.payload.pokemonSearch || '';
            state.search = action.payload.search;
        },
    }
});


// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;
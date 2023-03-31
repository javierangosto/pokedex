import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        next: '',
        previous: '',
        pokemons: [],
        isLoading: false,
    },
    reducers: {
        startLoadingPokemons: ( state ) => {
            state.isLoading = true;
        },
        setPokemons: ( state, action ) => {
            state.isLoading = false;
            state.pokemons = action.payload.pokemons;
            state.next = action.payload.next;
            state.previous = action.payload.previous;
        },
    }
});


// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;
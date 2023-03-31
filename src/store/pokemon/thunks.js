import { pokemonApi } from '../../api';
import { setPokemons, startLoadingPokemons } from './pokemonSlice';

export const getPokemons = ( url = '/pokemon' ) => {
    return async( dispatch ) => {
        
        dispatch( startLoadingPokemons() );

        const { data } = await pokemonApi.get( url );

        dispatch( setPokemons({ pokemons: data.results, next: data.next, previous: data.previous }) );
        
    }
}


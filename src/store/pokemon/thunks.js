import { pokemonApi } from '../../api';
import { setPokemons, startLoadingPokemons } from './pokemonSlice';

export const getPokemons = ( url = '/pokemon', search = false ) => {
    return async( dispatch ) => {
        
        dispatch( startLoadingPokemons() );

        const { data } = await pokemonApi.get( url );

        dispatch( setPokemons({ pokemons: data.results, pokemonSearch: data, current: url, next: data.next, previous: data.previous, search: search }) );
        
    }
}


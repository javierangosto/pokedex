import { pokemonApi } from '../../api';
import { setPokemons, startLoadingPokemons } from './pokemonSlice';

export const getPokemons = ( url = '/pokemon', search = false, query = '' ) => {
    return async( dispatch ) => {
        
        dispatch( startLoadingPokemons() );

        let data = '';

        await pokemonApi.get( url )
            .then ( (response) => {
                data = response.data;
                dispatch( setPokemons({ pokemons: data.results, pokemonSearch: data, current: url, next: data.next, previous: data.previous, search: search }) );
            })
            .catch (( error ) => {
                dispatch( setPokemons({ pokemons: '', pokemonSearch: '', current: '', next: '', previous: '', search: true, query: query }) );
            })
        
    }
}


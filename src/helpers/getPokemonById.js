import { pokemonApi } from "../api";


export const getPokemonById = async( url = '' ) => {

    const { data } = await pokemonApi.get( url );

}

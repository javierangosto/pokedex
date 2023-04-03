import { PokemonCard } from "../"


export const PokemonList = ( { pokemons }) => {

    return (

        <>
        {
            pokemons.map( ({ name, url }) => (
                <PokemonCard key={ name } name = { name } url={ url } />
            ))
        }

        </>

    )   
}

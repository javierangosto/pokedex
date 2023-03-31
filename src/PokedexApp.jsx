import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PokemonCard } from "./components";
import { getPokemons } from "./store";
import { NavBar } from "./UI";


export const PokedexApp = () => {

    const dispatch = useDispatch();
    const { isLoading, pokemons = [], next, previous } = useSelector( state => state.pokemon );

    useEffect(() => {
        dispatch( getPokemons() );  
    }, []);

    return (
        <>
            <NavBar />    
            <ul>
              {
                pokemons.map( ({ name, url }) => (
                    <PokemonCard key={ name } name = { name } url={ url } />
                ))
              }
            </ul>

            <button
                style={{ display: previous ? '' : 'none' }}
                disabled={ isLoading }
                onClick={ () => dispatch( getPokemons(previous) ) }
            >
            Previous
            </button>
            <button
                style={{ display: next ? '' : 'none' }}
                disabled={ isLoading }
                onClick={ () => dispatch( getPokemons(next) ) }
            >
            Next
            </button>
        </>
    )
}

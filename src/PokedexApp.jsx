import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PokemonCard } from "./components";
import { getPokemons } from "./store";
import { AppTheme } from "./theme";
import { NavBar, Search } from "./UI";


export const PokedexApp = () => {

    const dispatch = useDispatch();
    const { isLoading, pokemons = [], next, previous } = useSelector( state => state.pokemon );

    useEffect(() => {
        dispatch( getPokemons() );  
    }, []);

    return (
        <AppTheme>
            <NavBar />   
            <Search />
            <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                pokemons.map( ({ name, url }) => (
                    <PokemonCard key={ name } name = { name } url={ url } />
                ))
            }
            </div>

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
        </AppTheme>
    )
}

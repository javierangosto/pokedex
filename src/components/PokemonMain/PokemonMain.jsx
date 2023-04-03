import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../store";
import { PokemonCardSingle, PokemonList } from "../"
import { useEffect } from "react";
import { NavButtons } from "../../UI";


export const PokemonMain = () => {

    const dispatch = useDispatch();
    const { isLoading, pokemons = [], pokemonSearch = [], next, previous, search } = useSelector( state => state.pokemon );

    useEffect(() => {
        dispatch( getPokemons() );  
    }, []);

    return (
        <>
            <div className="container col animate__animated animate__fadeIn">
                <div className="row">

                    {
                        ( search )
                        ? <PokemonCardSingle key = { pokemonSearch.id } />
                        : <PokemonList key={ pokemons.name } pokemons = { pokemons }/>
                    }

                    

                </div>
            </div>  

            <NavButtons 
                isLoading = { isLoading } 
                next = { next }
                previous = { previous }
            />  
        </>
    )
}

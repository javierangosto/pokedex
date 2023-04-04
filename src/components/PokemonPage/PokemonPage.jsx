import { useEffect } from "react";
import { useSelector } from "react-redux";


export const PokemonPage = ({ id }) => {
    const { pokemonSearch = [] } = useSelector( state => state.pokemon );

    useEffect(() => {
        const getData = async () => {

          const data = await getPokemonById(url);
          setPokemonData(data);
        };

        getData();
      }, []);
    

    return (
        <h1>PokemonPage {id}</h1>
    )
}

import { AppTheme } from "./theme";
import { NavBar, Search } from "./UI";
import { PokemonMain, PokemonPage } from "./components";
import { useParams } from "react-router-dom";


export const PokedexApp = () => {

    const { id } = useParams();  

    return (
        <AppTheme>
            <NavBar />   

            {
                (id)
                ? <PokemonPage id={ id } />
                : <> <Search />  <PokemonMain /></>
            }

        </AppTheme>
    )
}

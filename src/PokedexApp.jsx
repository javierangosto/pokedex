import { AppTheme } from "./theme";
import { NavBar, Search } from "./UI";
import { PokemonMain } from "./components";


export const PokedexApp = () => {

    return (
        <AppTheme>
            <NavBar />   
            <Search />
            
             <PokemonMain />

        </AppTheme>
    )
}

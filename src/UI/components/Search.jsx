import { Grid, IconButton, InputAdornment, TextField } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { useForm } from "../../hooks";
import { getPokemons } from "../../store";
import { useDispatch } from "react-redux";


export const Search = () => {

    const { query, onInputChange} = useForm()
    const dispatch = useDispatch();

    const handleSubmit = ( event ) => {

      event.preventDefault();
      
      if (!query) {
        dispatch(getPokemons());
      }else{
        dispatch(getPokemons( `https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`, true, query ));
      }

    }

    return (
        <Grid 
            container 
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
        >
            <Grid item xs={12} sx={{ mt: 1, mb: 3 }}>
                <h1 className="title bold wf-600">Pokédex</h1>
                <p className="title-text">Search for a Pokémon by name or using its National Pokédex number.</p>
                <form 
                  onSubmit={ handleSubmit }
                >
                  <TextField 
                      size="small"
                      fullWidth
                      placeholder="Name or number..."
                      name="query"
                      value = { query }
                      onChange={ onInputChange }
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            <IconButton type="submit" color="primary" >
                              <SearchIcon />
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                  />
                </form>
            </Grid>
        </Grid>
    )
}

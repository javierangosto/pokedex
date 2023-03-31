import { Grid, IconButton, InputAdornment, TextField } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';


export const Search = () => {
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
                <TextField 
                    size="small"
                    fullWidth
                    type="pokemon" 
                    placeholder="Name or number..."
                    name="pokemon"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">
                          <IconButton color="primary">
                            <SearchIcon />
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                />
            </Grid>
        </Grid>
    )
}

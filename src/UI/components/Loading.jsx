import { CircularProgress, Grid } from "@mui/material"


export const Loading = () => {
    return (
        
        <Grid 
            container
            spacing = {0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', padding: 4 }}
        >
            <Grid container
                item
                direction='row'
                justifyContent="center"
            >
                <CircularProgress color="primary" />
            </Grid>
        </Grid>
        
    )
}
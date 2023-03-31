import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({

    palette: {
        primary: {
            main: '#7b6aa0',
        },
        error:{
            main: red.A400,
        }
    }

})
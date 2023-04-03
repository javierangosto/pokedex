import { ArrowBackIosOutlined, ArrowForwardIosOutlined, RestartAltOutlined } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { getPokemons } from "../../store"
import { useDispatch } from "react-redux";


export const NavButtons = ({ isLoading, next, previous }) => {

    const dispatch = useDispatch();
    
  return (
    <>   

        <IconButton
            size='large'
            disabled={ isLoading }
            sx={{
                color: 'white',
                    backgroundColor: 'primary.main',
                ':hover': { backgroundColor: 'primary.main', opacity: 0.9},
                position: 'fixed',
                right: 100,
                bottom: 50,
            }}
            onClick={ () => dispatch( getPokemons(next) ) }
            style={{ display: next ? '' : 'none' }}
        >
            <ArrowForwardIosOutlined sx={{ fontSize: 30 }} />
        </IconButton>

        <IconButton
            size='large'
            disabled={ isLoading }
            sx={{
                color: 'white',
                backgroundColor: 'primary.main',
                ':hover': { backgroundColor: 'primary.main', opacity: 0.9},
                position: 'fixed',
                left: 100,
                bottom: 50,
            }}
            onClick={ () => dispatch( getPokemons(previous) ) }
            style={{ display: previous ? '' : 'none' }}
        >
            <ArrowBackIosOutlined sx={{ fontSize: 30 }} />
        </IconButton> 

        <IconButton
            size='large'
            disabled={ isLoading }
            sx={{
                color: 'white',
                    backgroundColor: 'primary.main',
                ':hover': { backgroundColor: 'primary.main', opacity: 0.9},
                position: 'fixed',
                right: 100,
                bottom: 50,
            }}
            onClick={ () => dispatch( getPokemons() ) }
            style={{ display: next ? 'none' : '' }}
        >
            <RestartAltOutlined sx={{ fontSize: 30 }} />
        </IconButton>

    </>
  )
}

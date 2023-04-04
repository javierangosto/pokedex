import { useSelector } from "react-redux";
import { getClassNameByType, getTypeBackground } from "../../helpers/getInfoPokemon";
import { useState } from "react";
import { Link } from "react-router-dom";

export const PokemonCardSingle = () => {
    const { pokemonSearch = [], query } = useSelector( state => state.pokemon );
    const [bounceCard, setBounceCard] = useState(false);

    const handleMouseOver = () => {
        setBounceCard(true);
    };
  
    const handleMouseOut = () => {
        setBounceCard(false);
    };

    if ( !pokemonSearch ) return (
            
        <div 
            className="alert alert-danger animate__animated animate__fadeIn"
        >
            There is no pokemon with the name/id <b>{ query }</b>
        </div>
        )

    const id = pokemonSearch.id;
    const colorType = getClassNameByType(pokemonSearch?.types[0].type.name);
    
    return (
            
            <div 
                className={ `col-md-4 col-xl-3 ${ bounceCard ? "animate__animated animate__pulse" : "" }` }
                onMouseOver={handleMouseOver}
                onMouseOut ={handleMouseOut}
            >
                <Link to={`/pokemon/${ id }`} >
                    <div className={`card ${ colorType } order-card`}>
                        <div className="card-block">
                            <h4 className="m-b-0 title-card ">
                                <b>{ pokemonSearch.name.charAt(0).toUpperCase() + pokemonSearch.name.slice(1) }</b>
                            </h4>
                            <div>
                                <img src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ id }.png` } className={`pokemon-card f-left`} alt = { name } />
                                <p className="f-right types">
                                    { pokemonSearch?.types.map(type => (
                                        <i key={ id + type.type.name }><span className={`card ${ getTypeBackground(type.type.name) }`}> { type.type.name }<br /></span></i>
                                        )) 
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
    )
}

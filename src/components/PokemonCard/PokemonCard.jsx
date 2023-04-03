import { useEffect, useState } from "react";
import { getClassNameByType, getPokemonById, getTypeBackground } from "../../helpers/getInfoPokemon";
import { Loading } from "../../UI";

export const PokemonCard = ({ name, url }) => {
    const [pokemonData, setPokemonData] = useState();
    const [bounceCard, setBounceCard] = useState(false);

    const handleMouseOver = () => {
        setBounceCard(true);
    };
  
    const handleMouseOut = () => {
        setBounceCard(false);
    };

    useEffect(() => {
        const getData = async () => {

          const data = await getPokemonById(url);
          setPokemonData(data);
        };

        getData();
      }, []);

    const id = url.substring(33, url.length).replaceAll('/', '');
    const colorType = getClassNameByType(pokemonData?.types[0].type.name);

    if ( !pokemonData || !name ) return <Loading key={ id } /> 
    
    return (
            
            <div 
                className={ `col-md-4 col-xl-3 ${ bounceCard ? "animate__animated animate__pulse" : "" }` }
                onMouseOver={handleMouseOver}
                onMouseOut ={handleMouseOut}
            >
                <div className={`card ${ colorType } order-card`}>
                    <div className="card-block">
                        <h4 className="m-b-0 title-card ">
                            <b>{ name.charAt(0).toUpperCase() + name.slice(1) }</b>
                        </h4>
                        <div>
                            <img src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ id }.png` } className="pokemon-card f-left" alt = { name } />
                            <p className="f-right types">
                                { pokemonData?.types.map(type => (
                                    <i key={ id + type.type.name }><span  className={`card ${ getTypeBackground(type.type.name) }`}> { type.type.name }<br /></span></i>
                                    )) 
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

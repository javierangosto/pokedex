import { useSelector } from "react-redux";
import { getClassNameByType, getTypeBackground } from "../../helpers/getInfoPokemon";
import { Loading } from "../../UI";

export const PokemonCardSingle = () => {
    const { pokemonSearch = [] } = useSelector( state => state.pokemon );

    const id = pokemonSearch.id;
    const colorType = getClassNameByType(pokemonSearch?.types[0].type.name);

    if ( !pokemonSearch ) return <Loading /> 
    
    return (
            
            <div className="col-md-4 col-xl-3">
                <div className={`card ${ colorType } order-card`}>
                    <div className="card-block">
                        <h4 className="m-b-0 title-card ">
                            <b>{ pokemonSearch.name.charAt(0).toUpperCase() + pokemonSearch.name.slice(1) }</b>
                        </h4>
                        <div>
                            <img src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ id }.png` } className="pokemon-card f-left" alt = { name } />
                            <p className="f-right types">
                                { pokemonSearch?.types.map(type => (
                                    <i key={ id + type.type.name }><span className={`card ${ getTypeBackground(type.type.name) }`}> { type.type.name }<br /></span></i>
                                    )) 
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

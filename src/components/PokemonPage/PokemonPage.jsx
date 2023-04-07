import { useEffect, useState } from "react";
import { Loading } from "../../UI";
import { getClassNameByType, getPokemonById, getTypeBackground } from "../../helpers/getInfoPokemon";
import { useNavigate } from "react-router-dom";
import { PokemonStats } from "../PokemonStats/PokemonStats";


export const PokemonPage = ({ id }) => {

  const navigate = useNavigate();
  const [pokemonData, setPokemonData] = useState();
  const url = `https://pokeapi.co/api/v2/pokemon/${id.toLowerCase()}`

  const handleNavigateBack = () =>{
      navigate("/");
  }

  useEffect(() => {

      const getData = async () => {

        const data = await getPokemonById(url);
        setPokemonData(data);
      };

      getData();

    }, []);

    const colorType = getClassNameByType(pokemonData?.types[0].type.name);

  if ( !pokemonData ) return <Loading key={ id } /> 
  return (
    <div className="container">
      

      <button 
          className="btn btn-outline-primary f-right"
          onClick={ handleNavigateBack }
      >
          { '<< Return' }
      </button>
      
      <div className="row mt-5">
        <h1>{`${pokemonData.name.toUpperCase()} #${pokemonData.id}`}</h1>
        <div className="col-4 animate__animated animate__bounceInLeft">
            <img src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ id }.png` } alt={ pokemonData.name } className="img-fluid" />
        </div>

        <div className="col-4">
            <h5>Type:</h5>
            <p className="types-detail">
                { pokemonData?.types.map(type => (
                    <i key={ id + type.type.name }><span  className={`card ${ getTypeBackground(type.type.name) }`}> { type.type.name }<br /></span></i>
                    )) 
                }
            </p>
            <h5>Height:</h5>
            <p className="text-detail">{`${(pokemonData.height / 10).toFixed(1)}m`}</p>
            
            <h5>Weight:</h5>
            <p className="text-detail">{`${(pokemonData.weight / 10).toFixed(1)}kg`}</p>

        </div>

        <div className="col-4">
          <h5>Abilites:</h5>
              { pokemonData.abilities.map(ability => (
                  <p className="text-detail" key={ ability.ability.name }>{ `${ ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1) } ${ ability.is_hidden ? ' (hidden)' : '' }`  }</p>
                  )) 
              }
        </div>

      </div>
      <div className="row mt-1">
        <p className="text-detail">Base stats</p> 
        <PokemonStats key = {`PokemonStat`}  stats={ pokemonData.stats } color = { colorType }/>
      </div>
      
    </div>

  )
}

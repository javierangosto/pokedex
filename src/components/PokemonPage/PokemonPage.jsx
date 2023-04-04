import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Loading } from "../../UI";
import { getPokemonById, getTypeBackground } from "../../helpers/getInfoPokemon";
import { useNavigate } from "react-router-dom";


export const PokemonPage = ({ id }) => {

  const navigate = useNavigate();
  const [pokemonData, setPokemonData] = useState();
  const url = `https://pokeapi.co/api/v2/pokemon/${id.toLowerCase()}`

  const handleNavigateBack = () =>{
      navigate(-1);
  }

  useEffect(() => {

      const getData = async () => {

        const data = await getPokemonById(url);
        setPokemonData(data);
      };

      getData();

    }, []);

  if ( !pokemonData ) return <Loading key={ id } /> 
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-4 animate__animated animate__bounceInLeft">
            <img src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ id }.png` } alt={ pokemonData.name } className="img-fluid" />
        </div>

        <div className="col-8">
            <h3>{pokemonData.name.toUpperCase()}</h3>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"> <b>Alter ego:</b> { pokemonData.name }</li>
                <li className="list-group-item"> <b>Publisher:</b> { pokemonData.name }</li>
                <li className="list-group-item"> <b>First appearance:</b> { pokemonData.name }</li>
            </ul>

            <h5 className="mt-3"> Tipos </h5>
            <p className="types-detail">
                { pokemonData?.types.map(type => (
                    <i key={ id + type.type.name }><span  className={`card ${ getTypeBackground(type.type.name) }`}> { type.type.name }<br /></span></i>
                    )) 
                }
            </p>

            <button 
                className="btn btn-outline-primary"
                onClick={ handleNavigateBack }
            >
                { '<< Return' }
            </button>

        </div>
      </div>
    </div>

  )
}

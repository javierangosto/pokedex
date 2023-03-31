
export const PokemonCard = ({ name = "", url = ""}) => {

    const id = url.substring(33, url.length).replaceAll('/', '');
    
    return (
        
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ id }.png` } className="card-img" alt = { name } />
                    </div>

                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{ name }</h5>
                            <p className="card-text">{ name }</p>

                            <p className="card-text">
                                <small className="text-muted"></small>
                            </p>

                            {/*<Link to={`/hero/${ id }`}>
                                Más...                            
                            </Link>*/}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

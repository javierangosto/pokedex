import { PokemonStatElement } from "./PokemonStatElement"


export const PokemonStats = ({ stats, color}) => {
    return (
        
        <div className="row">
            <div className="col-md-12">

        {
          stats.map(stat => (
            <PokemonStatElement key = {`PokemonStatElement-${stat.stat.name}`} stat = { stat } color = { color } />
          ))
        }
        
                
        </div>
        </div>
    )
}



export const PokemonStatElement = ({ stat }) => {

    const statPerc = stat.base_stat / 2.55 + '%';

    return (
        <>
            <h3 className="progress-title">{ stat.stat.name }</h3>
            <div className="progress">
                
                <div className="progress-bar" style={{["width"]: statPerc }}>
                    <div className="progress-value">{stat.base_stat}</div>
                </div>
            </div>
        </>
    )
}

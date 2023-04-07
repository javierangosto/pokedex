

export const PokemonStatElement = ({ stat, color }) => {

    const statPerc = stat.base_stat / 2.55 + '%';

    return (
        <>
            <h3 className="progress-title">{ stat.stat.name.replace('-', ' ').toUpperCase()  }</h3>
            <div className={`progress`}>
                
                <div className={ `progress-bar ${ color }` } style={{["width"]: statPerc }}>
                    <div className="progress-value">{stat.base_stat}</div>
                </div>
            </div>
        </>
    )
}

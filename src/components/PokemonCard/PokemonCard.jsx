
export const PokemonCard = ({ name = "", url = ""}) => {

    const id = url.substring(33, url.length).replaceAll('/', '');
    
    return (

        <>
            <img src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ id }.png` } />
            <span>#{ id }: { name }</span>
        </>

    )
}

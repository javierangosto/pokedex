import { pokemonApi } from "../api";


export const getPokemonById = async( url = '' ) => {

    const { data } = await pokemonApi.get( url );
    return data;

}
export const getClassNameByType = ( type = 'normal' ) => {

    switch (type) {
        case 'fire':
            return 'bg-c-fire';
        case 'grass':
            return 'bg-c-grass';
        case 'steel':
            return 'bg-c-steel';
        case 'water': 
            return 'bg-c-water';
        case 'psychic':
            return 'bg-c-psychic';
        case 'ground':
            return 'bg-c-ground';
        case 'ice':
            return 'bg-c-ice';
        case 'flying':
            return 'bg-c-flying';
        case 'ghost':
            return 'bg-c-ghost';
        case 'normal':
            return 'bg-c-normal';
        case 'poison':
            return 'bg-c-poison';
        case 'rock':
            return 'bg-c-rock';
        case 'fighting':
            return 'bg-c-fighting';
        case 'dark':
            return 'bg-c-dark';
        case 'bug':
            return 'bg-c-bug';
        case 'dragon':
            return 'bg-c-dragon';
        case 'electric':
            return 'bg-c-electric';
        case 'fairy':
            return 'bg-c-fairy';
        case 'unknow':
            return 'bg-c-unknow';
        case 'shadow':
            return 'bg-c-shadow';
        default:
            return 'bg-c-normal';

    }

}

export const getTypeBackground = ( type = 'normal' ) => {

    switch (type) {
        case 'fire':
            return 'bg-type-fire';
        case 'grass':
            return 'bg-type-grass';
        case 'steel':
            return 'bg-type-steel';
        case 'water': 
            return 'bg-type-water';
        case 'psychic':
            return 'bg-type-psychic';
        case 'ground':
            return 'bg-type-ground';
        case 'ice':
            return 'bg-type-ice';
        case 'flying':
            return 'bg-type-flying';
        case 'ghost':
            return 'bg-type-ghost';
        case 'normal':
            return 'bg-type-normal';
        case 'poison':
            return 'bg-type-poison';
        case 'rock':
            return 'bg-type-rock';
        case 'fighting':
            return 'bg-type-fighting';
        case 'dark':
            return 'bg-type-dark';
        case 'bug':
            return 'bg-type-bug';
        case 'dragon':
            return 'bg-type-dragon';
        case 'electric':
            return 'bg-type-electric';
        case 'fairy':
            return 'bg-type-fairy';
        case 'unknow':
            return 'bg-type-unknow';
        case 'shadow':
            return 'bg-type-shadow';
        default:
            return 'bg-type-normal';

    }

}

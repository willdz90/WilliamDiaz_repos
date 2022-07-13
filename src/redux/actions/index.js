import { getAllInfo } from '../../functions/getInfo';
import { GET_POKEMON, GET_POKEMON_BY_NAME } from '../actionTypes/actonTypes.js';

export function getPokemons(){
    return async function(dispatch){
        var json = await getAllInfo();
        return dispatch({
            type: GET_POKEMON,
            payload : json
        })
    }
}


export function getPokemonByName(name){
    return async function(dispatch){
        var json = await getAllInfo(name);
        return dispatch({
            type: GET_POKEMON_BY_NAME,
            payload : json
        })
    }
}
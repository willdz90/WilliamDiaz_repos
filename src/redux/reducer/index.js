
const initialState = {
    pokemones : [],
}

function rootReducer(state=initialState, action){

    switch (action.type) {
        case "GET_POKEMON":
            return{
                ...state,
                pokemones : action.payload
            }
        case "GET_POKEMON_BY_NAME":
            return{
                ...state,
                pokemones : action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;
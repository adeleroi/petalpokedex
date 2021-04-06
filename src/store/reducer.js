import { combineReducers } from 'redux'
import {
    POKEMON_BEGIN,
    POKEMON_SUCCESS,
    POKEMON_ERROR,
    BD_BEGIN,
    BD_ERROR,
    BD_SUCCESS,
} from './actionTypes'

const bdInitState = {
    isLoading: false,
    error: null,
    bdData: null
}

const bdReducer = (state = bdInitState, action) => {
    const {type, error} = action
    switch(type){
        case BD_BEGIN:
            return {
                ...state,
                isLoading: true,
            }
        case BD_SUCCESS:
            return {
                ...state,

            }
        case BD_ERROR:
            return {
                ...state,
                error,
            }
        default:
            return state;
    }

}

const pkInitState = { 
    news: null,
    error: null,
    stockData: null,
    pokemonData: [], 
    isFetching: false,
}

const pokemonReducer = (state=pkInitState, action) => {

    switch (action.type){
        case POKEMON_BEGIN:
            return {
                ...state,
                isFetching: true
            };

        case POKEMON_SUCCESS:
            return {
                ...state,
                isFetching: false,
                stockData: action.data
            };
        
        case POKEMON_ERROR:
            return {
                error: action.error
            }
            
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    bdReducer,
    pokemonReducer
})

export default rootReducer
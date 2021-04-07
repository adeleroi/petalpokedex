import { combineReducers } from 'redux'
import {
    POKEMON_BEGIN,
    POKEMON_SUCCESS,
    POKEMON_ERROR,
    BD_BEGIN,
    BD_ERROR,
    BD_SUCCESS,
    RC_BEGIN,
    RC_SUCCESS,
    RC_ERROR,
} from './actionTypes'

const bdInitState = {
    isLoading: false,
    error: null,
    bdData: null,
    pokemonName: []
}

const bdReducer = (state = bdInitState, action) => {
    const {type, data, error} = action
    switch(type){
        case BD_BEGIN:
            return {
                ...state,
                isLoading: true,
            }
        case BD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                pokemonName: data.filter(ob => !ob.name.includes('-')).map(
                    ob => ({name:ob.name, id: ob.url.split('/').slice(-2, -1)[0]})
                ),
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
    // news: null,
    error: null,
    pokemonData: null, 
    isFetching: false,
}

const pokemonReducer = (state=pkInitState, action) => {
    const {data, type, error} = action
    switch (type){
        case POKEMON_BEGIN:
            return {
                ...state,
                isFetching: true
            };

        case POKEMON_SUCCESS:
            return {
                ...state,
                isFetching: false,
                pokemonData: data,
            };
        
        case POKEMON_ERROR:
            return {
                error,
            }
            
        default:
            return state;
    }
}



const rcInitState = {
    isLoading: false,
    error: null,
    // bdData: null,
    record: null
}

const rcReducer = (state = rcInitState, action) => {
    const {type, data, error} = action
    switch(type){
        case RC_BEGIN:
            return {
                ...state,
                isLoading: true,
            }
        case RC_SUCCESS:
            return {
                ...state,
                isLoading: false,
                record: data
            }
        case RC_ERROR:
            return {
                ...state,
                error,
            }
        default:
            return state;
    }

}
const rootReducer = combineReducers({
    bdReducer,
    pokemonReducer,
    rcReducer
})

export default rootReducer
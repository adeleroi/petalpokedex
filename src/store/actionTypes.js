export const POKEMON_BEGIN = "POKEMON_BEGIN";
export const POKEMON_SUCCESS = "POKEMON_SUCCESS";
export const POKEMON_ERROR = "POKEMON_ERROR"

export const BD_BEGIN = "BD_BEGIN";
export const BD_SUCCESS = "BD_SUCCESS";
export const BD_ERROR = "BD_ERROR"


export const requestPokemonData = () => ({
    type: POKEMON_BEGIN,
})

export const receivePokemonData = (data) => ({
    type: POKEMON_SUCCESS,
    data,
})

export const requestPokemonFail = (error) => ({
    type: POKEMON_ERROR,
    error,
})

export const requestBdData = () => ({
    type: BD_BEGIN
})

export const receiveBdData = (data) => ({
    type: BD_SUCCESS,
    data,
})

export const requestBdFail = (error) => ({
    type: BD_ERROR,
    error,
})

export const fetchPokemonData = () => {
    return dispatch => {
        dispatch(requestPokemonData())
        return fetch()
    }
}

export const fetchBdData = symbol => {
    return dispatch => {
        dispatch(requestBdData())
        return fetch()

    }
}
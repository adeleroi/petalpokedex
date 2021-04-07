export const POKEMON_BEGIN = "POKEMON_BEGIN";
export const POKEMON_SUCCESS = "POKEMON_SUCCESS";
export const POKEMON_ERROR = "POKEMON_ERROR"

export const BD_BEGIN = "BD_BEGIN";
export const BD_SUCCESS = "BD_SUCCESS";
export const BD_ERROR = "BD_ERROR"

export const RC_BEGIN = "RC_BEGIN";
export const RC_SUCCESS = "RC_SUCCESS";
export const RC_ERROR = "RC_ERROR"

const BASE_URL = "https://pokeapi.co/api/v2/"

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

export const fetchPokemonsData = (urlTo, offset=150, limit=50) => {
    
    const url = !urlTo ? BASE_URL + `pokemon?limit=${limit}&offset=${offset}` : urlTo
    console.log(url)

    return dispatch => {
        dispatch(requestPokemonData())
        return fetch(url)
        .then(async x => {
            const resultats = await x.json()
            const {previous, next} = resultats
            const summary = []
            for(let data of resultats.results){
                const res = await getGeneralInfo(data)
                summary.push(res)
            }
            const cleanData = {summary, previous, next}
            dispatch(receivePokemonData(cleanData))
        })
        .catch(e => dispatch(requestPokemonFail(e)))
    }
}








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

export const fetchBdData = symbol => {
    const url = BASE_URL + "pokemon?limit=1118&offset=0"
    return dispatch => {
        dispatch(requestBdData())
        return fetch(url)
        .then(async x => {  
            const data = await x.json()
            dispatch(receiveBdData(data.results))
        })
        .catch(e => dispatch(requestBdFail(e)))
    }
}








export const requestRecordData = () => ({
    type: RC_BEGIN
})

export const receiveRecordData = (data) => ({
    type: RC_SUCCESS,
    data,
})

export const requestRecordFail = (error) => ({
    type: RC_ERROR,
    error,
})

export const fetchPokemonRecord = (id) => {
    // console.log('je dispatch la bonne action')
    return async dispatch => {
        dispatch(requestRecordData())
        let data
        try {
            data = await BuildPokemonRecord(id)
            // console.log('record data', data)
            dispatch(receiveRecordData(data))
        } catch (error) {
            dispatch(requestRecordFail(error))
        }
    }
}

async function getGeneralInfo(data){
    let id = data.url && data.url.split('/').slice(-2, -1)[0]
    let pokemon = await fetch(data.url)
    pokemon = await pokemon.json()
    return {
        id,
        name: pokemon?.name,
        type: pokemon?.types[0]?.type?.name,
        img: pokemon?.sprites?.other?.dream_world?.front_default,
    }
}

async function BuildPokemonRecord(id) {

    const url = BASE_URL + `pokemon/${id}`

    async function getGeneralInfo(){
        let pokemon = await fetch(url)
        pokemon = await pokemon.json()
        return {
            id,
            name: pokemon?.name,
            stats: pokemon?.stats,
            weight: pokemon?.weight,
            abilities: pokemon?.abilities,
            type: pokemon?.types[0]?.type?.name,
            type1: pokemon?.types,
            img: pokemon?.sprites?.other?.dream_world?.front_default,
        }
    }

    async function getAbout(){
        const url = BASE_URL + `pokemon-species/${id}`
        let result = await fetch(url)
        result = await result.json()
        return {
            name: result.name,
            species_name: result.name, //Dragon(Charmander)
            texts: result?.flavor_text_entries.filter(
                ob => ob?.language?.name === "fr"
            ).map(obj => obj.flavor_text),
            evolution_chain_url: result?.evolution_chain, // url
            habitat: result?.habitat?.name,
            shape: result?.shape?.name,
            egg_groups: result?.egg_groups // array
        }
    }

    async function getEvolution(){
        let res = await getAbout()
        const url = res?.evolution_chain_url.url
        let result = await fetch(url)
        result = await result.json()

        let data =  {
            evolution1: result?.chain?.species.name, //charmander
            evolution2: result?.chain?.evolves_to[0]?.species.name, //charmeleon
            evolution3: result?.chain?.evolves_to[0]?.evolves_to[0].species.name, //charizard
        }
        // console.log('xxxxxxxxxxxxxx', res.name)
        let evolution = (res.name === data.evolution1) ?
            (data.evolution2) : (res.name === data.evolution2)
            ? (data.evolution3) : null
        return {
            ...data,
            evolution,
        }
    }

    let [
        generalInfo,
        about,
        evolution,
    ] = await Promise.all([
        getGeneralInfo(),
        getAbout(),
        getEvolution()
    ])
    console.log("generale infos",  generalInfo)
    return { id, generalInfo, about, evolution }
}
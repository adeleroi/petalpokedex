export async function storeLocally(value) {
    let data = window.localStorage.getItem('recentPokemon')
    if(data){
        data = JSON.parse(data)
        data.push(value.trim())
        data = [...new Set(data)]
        window.localStorage.setItem('recentPokemon', JSON.stringify(data))
        return
    }
    window.localStorage.setItem('recentPokemon', JSON.stringify([value.trim()]))
    return 
}

export function getStorageValues(){
    let data = window.localStorage.getItem('recentPokemon')
    return JSON.parse(data)
}

export async function removeStorageValue(value){
    let store = getStorageValues()
    store = store.filter(pokemon => pokemon !== value)
    window.localStorage.setItem('recentPokemon', JSON.stringify(store))
    
}
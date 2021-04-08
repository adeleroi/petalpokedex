import * as React from 'react'
import { SearchMenu } from './pokedex'


const SearchContext = React.createContext()

const SearchProvider = (props) => {
    const [isOpen, setIsOpen] = React.useState(false)
    return <SearchContext.Provider value={[isOpen, setIsOpen]} {...props} />
}

const useContextSearch = () => {
    const context = React.useContext(SearchContext)
    if(context === undefined){
        throw Error("UseContextMenu doit etre utilise a l'interieur de Menu")
    }
    return context
}

const SearchFilter = ({value, pokemonName, isValid}) => {
    const [isOpen, setIsOpen] = React.useContext(SearchContext)
    return <SearchMenu isOpen={isOpen}
        disMiss={() => setIsOpen(false)} value={value}
        pokemonName={pokemonName} isValid={isValid}/>
}

const SearchOpen = ({children}) => {
    const [, setIsOpen] = React.useContext(SearchContext)
    return React.Children.map(children, (child) => {
        if(child.type.displayName === "styled.input"){
            return React.cloneElement(child, {
                onClick: () => setIsOpen(true),
                type:"search",
                placeholder:"Rechercher" ,
                id:"search",
                autoComplete:"off",
            })
        }
    })
}


export {
    SearchProvider,
    SearchOpen,
    SearchFilter,
    useContextSearch,
}

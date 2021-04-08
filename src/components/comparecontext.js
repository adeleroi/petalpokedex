import * as React from 'react'
import CompareMenu from './comparemenu'


const CompareContext = React.createContext()

const CompareProvider = (props) => {
    const [isOpen, setIsOpen] = React.useState(false)
    return <CompareContext.Provider value={[isOpen, setIsOpen]} {...props} />
}

const useContextCompare = () => {
    const context = React.useContext(CompareContext)
    if(context === undefined){
        throw Error("UseContextMenu doit etre utilise a l'interieur de Menu")
    }
    return context
}

const CompareFilter = ({value, pokemonName, isValid, handleComparison}) => {
    const [isOpen, setIsOpen] = React.useContext(CompareContext)
    return <CompareMenu isOpen={isOpen}
        disMiss={() => setIsOpen(false)} value={value}
        pokemonName={pokemonName} isValid={isValid}
        handleComparison={handleComparison}
    />
}

const CompareOpen = ({children}) => {
    const [, setIsOpen] = React.useContext(CompareContext)
    return React.Children.map(children, (child) => {
        if(child.type.displayName === "styled.input"){
            return React.cloneElement(child, {
                onClick: () => setIsOpen(true),
                type:"search",
                placeholder:"Comparer à, Ex: pikachu" ,
                id:"compare",
                autoComplete:"off",
            })
        }
    })
}


export {
    CompareProvider,
    CompareOpen,
    CompareFilter,
    useContextCompare,
}

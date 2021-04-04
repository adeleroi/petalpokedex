import * as React from 'react'
import {Dialog as ReachDialog} from '@reach/dialog'
import styled from 'styled-components'


const Dialog = styled(ReachDialog)({
    // maxWidth: '1150px',
    // height: '80vh'
    borderRadius: '3px',
    paddingBottom: '3.5em',
    boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.2)',
    margin: '0vh auto',
  })
const MenuContext = React.createContext()

const Menu = (props) => {
    const [isOpen, setIsOpen] = React.useState(false)
    return <MenuContext.Provider value={[isOpen, setIsOpen]} {...props} />
}

const useContextMenu = () => {
    const context = React.useContext(MenuContext)
    if(context === undefined){
        throw Error("UseContextMenu doit etre utilise a l'interieur de Menu")
    }
    return context
}

const MenuContent = (props) => {
    const [isOpen, setIsOpen] = React.useContext(MenuContext)
    const handleDismiss = () => {
        console.log("isOpen", isOpen)
        setIsOpen(false)
        console.log("isOpen", isOpen)
    }
    console.log("isOpen normal", isOpen)
    return (
        <ReachDialog isOpen={isOpen} onDismiss={handleDismiss} {...props} aria-label="search"/>
    )
}

const MenuOpen = ({children: child}) => {
    // console.log(child)
    const [isOpen, setIsOpen] = React.useContext(MenuContext)
    // const [, setIsOpen] = useContextMenu()
    return React.cloneElement(child, {
        onClick: () => setIsOpen(true)
    })
}


export {
    Menu,
    MenuOpen,
    MenuContent,
    useContextMenu
}

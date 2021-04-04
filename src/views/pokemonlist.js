import * as React from 'react'
import Search from '../components/search'
import pokeballcard from '../image/pokeballcard.png'
import { Link } from 'react-router-dom'
import Pokedex from '../components/pokedex'
import { useContextMenu } from '../components/searchcontext'


const PokemonList = () => {
    const [isOpen, ] = useContextMenu()
    return (
        <div>
            <NavList/>
            <Pokedex/>
        </div>
    )
}

export const NavList = () => {
    return (
        <div style={{display: 'flex', placeItems: 'center', width: '100%'}}>
            <div style={{margin: '0 30px'}}>
                <Link to="/">
                    <img src={pokeballcard} width="30px" height="30px"/>
                </Link>
            </div>
            <Search/>
        </div>
    )
}

export default PokemonList
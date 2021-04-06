import * as React from 'react'
import Search from '../components/search'
import pokeballcard from '../image/pokeballcard.png'
import { Link } from 'react-router-dom'
import Pokedex from '../components/pokedex'
import Foot from '../components/footer'



const PokemonList = () => {
    return (
        <div>
            <NavList/>
            <Pokedex number={50}/>
            <Foot/>
        </div>
    )
}

export const NavList = () => {
    return (
        <div style={{
            display: 'flex', width: '100%', position: 'fixed',
            top: '0px', alignItems: 'center',backgroundColor:'white',
            zIndex: '100000', height: '8vh'
            }}
        >
            <PokeballLogo/>
            <Search/>
        </div>
    )
}

export const PokeballLogo = () => {
    return (
        <>
            <div style={{margin: '0 30px'}}>
                <Link to="/">
                    <img src={pokeballcard} width="30px" height="30px" alt=""/>
                </Link>
            </div>
        </>
    )
}

export default PokemonList
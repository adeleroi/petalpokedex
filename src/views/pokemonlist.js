import * as React from 'react'
import { connect } from 'react-redux'
import Search from '../components/search'
import pokeballcard from '../image/pokeballcard.png'
import { Link } from 'react-router-dom'
import Pokedex from '../components/pokedex'
import Foot from '../components/footer'
// import { SearchMenu } from '../components/pokedex'

const PokemonList = ({pokemonName}) => {
    console.log("igname", pokemonName)
    return (
        <div>
            <NavList search={<Search pokemonName={pokemonName}/>}/>
            <Pokedex number={50}/>
            <Foot/>
        </div>
    )
}

export const NavList = ({pokemonName, search}) => {
    return (
        <div style={{
            display: 'flex', width: '100%',
            position: 'fixed', alignItems: 'center',
            backgroundColor:'white', top: '0px', 
            zIndex: '100000', height: '80px'
        }}
        >
            <PokeballLogo/>
            {search}
            {/* <Search pokemonName={pokemonName}/> */}
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

const mapStateToProps = state => ({
    pokemonName: state.bdReducer.pokemonName
})

export default connect(mapStateToProps)(PokemonList)
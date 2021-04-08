import * as React from 'react'
import {useHistory} from 'react-router-dom'
import { connect } from 'react-redux'
import Search from '../components/search'
import pokeballcard from '../image/pokeballcard.png'
import { Link } from 'react-router-dom'
import Pokedex, { PokedexNav } from '../components/pokedex'
import Foot from '../components/footer'
import {fetchPokemonsData} from '../store/actionTypes'
import {FullPageSpinner} from '../lib/index'
import {BiArrowBack} from 'react-icons/bi'
import styled from 'styled-components'



const PokemonList = ({
    pokemonName,
    // dispatch,
    isFetching, error,
    getData,
    nextPage,
    previousPage,
    pokemonData
}) => {

    React.useEffect(() => {
        getData()
    }, [getData])
    if(isFetching || !pokemonData){
        return <FullPageSpinner/>
    }
    console.log(isFetching, pokemonData)

    return (
        <div>
            <NavList search={
                <Search pokemonName={pokemonName}/>}
            />
            <Pokedex 
                number={50}
                pokemonData={pokemonData}
                nav={
                    <PokedexNav 
                        nextPage={nextPage}
                        previousPage={previousPage}
                        prevUrl={pokemonData.previous}
                        nextUrl={pokemonData.next}
                        scrollBehavior
                    />
                }
            />
            <Foot/>
        </div>
    )
}

export const NavList = ({search, previousPage}) => {
    return (
        <div style={{
            display: 'flex', width: '100%',
            position: 'fixed', alignItems: 'center',
            backgroundColor:'white', top: '0px', 
            zIndex: '100000', height: '80px'
        }}
        >
            <PokeballLogo/>
            {previousPage}
            {search}
        </div>
    )
}

export const PreviousPage = () => {
    const history = useHistory()
    const handleClick = () => {
        history.goBack()
    }
    return (
        <>
            <ArrowBack onClick={handleClick} style={{width: '50px', display:'grid',
                placeItems: 'center', cursor: 'pointer',
                fontSize: '25px'    
            }}>
                <BiArrowBack/>
            </ArrowBack>
        </>
    )
}

const ArrowBack = styled.div`
    :hover&{
        background-color: lightgray;
        border-radius: 50%;
        height: 50px;

    }
`


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
    pokemonName: state.bdReducer.pokemonName,
    isFetching: state.pokemonReducer.isFetching,
    error: state.pokemonReducer.error,
    pokemonData: state.pokemonReducer.pokemonData
})

const mapDispatchToProps = dispatch => ({
    getData: () => dispatch(fetchPokemonsData()),
    nextPage: url => dispatch(fetchPokemonsData(url)),
    previousPage: url => dispatch(fetchPokemonsData(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList)
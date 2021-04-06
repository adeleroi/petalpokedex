import * as React from 'react'
import {useParams} from 'react-router-dom'
import { connect } from 'react-redux'
import colors from '../utils/colors'
import styled from 'styled-components'
import Pokedex from '../components/pokedex'
import Tilt from '../components/tilt'
import {NavList} from './pokemonlist'
import Foot from '../components/footer'
import Search from '../components/search'


const Pokemon = ({pokemonName}) => {
    // fetch pokemon stat
    // fetch pokemon abilities
    // pass props to Arene to children
    const {id} = useParams()
    const data = () => ({pow: 'dkjfk', type: 'jadkjf', ability: 'oisjoij', stat: 'addfd', apropos: 'jslkjlkfdj'})
    return (
        <div>
            <NavList search={<Search pokemonName={pokemonName}/>}/>
            <Arene
                p_id={id}
                areneLeft={<AreneLeft p_id={id}/>}
                areneCenter={<AreneCenter data={data()} title="Statistiques clés" />}
                areneRight={<AreneRight data={data()} title="À propos"/>}
                pokemonType={data.type}
            >
            </Arene>
            <div>
                <h1 style={{textAlign: 'left', marginLeft: '50px'}}>Suggestions</h1>
                <Pokedex pokemonType={data.type} number={10} navOff marginTop={{marginTop: '70px'}}/>
            </div>
            <Foot/>
        </div>
    )
}

const Arene = ({areneLeft, areneCenter, areneRight, pokemonType, p_id}) => {

    return (
        <div style={{display: 'grid', placeItems: 'center',
            backgroundImage: `url(https://pokeres.bastionbot.org/images/pokemon/${p_id}.png)`,
            height: '600px',
            backgroundSize: 'cover', backgroundColor: 'steelblue',
            margin: '80px 0'
        }}>
            <div style={{backgroundColor: colors[pokemonType]}}>
                <div style={{display: 'flex', borderRadius: '15px'}}>
                    {areneLeft}
                    {areneCenter}
                    {areneRight}
                </div>
            </div>
        </div>
    )
}

const AreneLeft = ({p_id}) => {
    return (
        <Card left>
            <Tilt p_id={p_id} color="steelblue" move/>
        </Card>
    )
}

const AreneCenter = ({data, title}) => {
    const keys = Object.keys(data)
    return (
        <Card center>
            <div className="card-title">{title}</div>
            <div className="card-container">
                {
                    keys.map(key => (
                        <div className="card-section" key={key}>
                            <span className="card-key">{key}</span>
                            <span className="card-response">{data[key]}</span>
                        </div>
                    ))
                }
            </div>
        </Card>
    )
}

const AreneRight = ({data, title}) => {
    const keys = Object.keys(data)
    return (
        <Card right>
            <div className="card-title">{title}</div>
            <div className="card-container">
                {
                    keys.map(key => (
                        <div className="card-section" key={key}>
                            <span className="card-key">{key}</span>
                            <span className="card-response">{data[key]}</span>
                        </div>
                    ))
                }
            </div>
        </Card>
    )
}


const Card = styled.div`
    background-color: rgb(0, 0, 0, .6);
    min-width: 18vw;
    line-height: 35px;
    border: 1px solid #dcdcdc;
    padding: 0 10px;
    margin-bottom: 23px;
    border-bottom-left-radius: ${({left}) => left && "15px"};
    border-top-left-radius: ${({left}) => left && "15px"};
    border-bottom-right-radius: ${({right}) => right && "15px"};
    border-top-right-radius: ${({right}) => right && "15px"};
    .card-title{
        text-align: left;
        color: white;
        font-size: 25px;
        margin: 10px 0;
    }
    .card-container{
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: flex-start;
        font-size: 12px;
    }
    .card-section{
        display: flex;
        justify-content: space-between;
        border-top: 1px solid gray;
        margin-bottom: 15px;
        color: white;
    }
    .card-description{
        width: 15vw;
        text-align: left;
        margin-bottom: 20px;
        line-height: 20px;
        font-size: 12px;
    }

    .card-section-title{
        // display: flex;
        text-align: left;
        font-weight: bold;
        // margin-bottom: 30px;
        color: gray;
    }

    .card-response{
        margin-left: 5px;
        font-weight: bold;
    }

    .card-key{
        text-align: left;
        font-weight: bold;
        color: gray;
        font-size: 20px;
        color: white;
    }
`
const mapStateToProps = state => ({
    pokemonName: state.bdReducer.pokemonName
})
export default connect(mapStateToProps)(Pokemon)
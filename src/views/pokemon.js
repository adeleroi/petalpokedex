import * as React from 'react'
import {useParams} from 'react-router-dom'
import { connect } from 'react-redux'
import colors from '../utils/colors'
import styled from 'styled-components'
// import Pokedex from '../components/pokedex'
import Tilt from '../components/tilt'
import {NavList} from './pokemonlist'
import Foot from '../components/footer'
import Search from '../components/search'
import {fetchPokemonRecord} from '../store/actionTypes'
import {
    FullPageSpinner,
    // spinner,
} from '../lib/index'



const Pokemon = ({
    pokemonName, record,
    error, isFetching,
    dispatch
}) => {

    const {id} = useParams()
    const data = () => ({weight: 'dkjfk', type: 'jadkjf',
        ability: 'oisjoij', stat: 'addfd', species: 'jslkjlkfdj',
        habitat: 'erkwek', evolution: 'jjwfkejsk'
    })

    console.log(record)

    React.useEffect(() => {
        dispatch(fetchPokemonRecord(id))
    }, [dispatch, id])

    if(isFetching || !record){
        return <FullPageSpinner/>
    }

    return (
        <div>
            <NavList search={<Search pokemonName={pokemonName}/>}/>
            <Arene
                p_id={id}
                areneLeft={<AreneLeft data={record.generalInfo}/>}
                areneCenter={<AreneCenter data={record} title="Statistiques clés" />}
                areneRight={<AreneRight data={record.about} title="À propos"/>}
                pokemonType={data.type}
            >
            </Arene>
            {/* <div>
                <h1 style={{textAlign: 'left', marginLeft: '50px'}}>Suggestions</h1>
                <Pokedex pokemonType={data.type} number={10} marginTop={{marginTop: '70px'}}/>
            </div> */}
            <Foot/>
        </div>
    )
}

const Arene = ({areneLeft, areneCenter, areneRight, pokemonType, p_id}) => {

    return (
        <div style={{display: 'grid', placeItems: 'center',
            backgroundImage: `url(https://pokeres.bastionbot.org/images/pokemon/${p_id}.png)`,
            height: '750px',
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

const AreneLeft = ({data}) => {
    return (
        <Card left style={{minWidth: '17vw', display: 'grid', placeItems: 'center'}}>
            <Tilt data={data} color="steelblue" move/>
        </Card>
    )
}

const AreneCenter = ({data, title}) => {
    const obj = {
        // Type: data.generalInfo.type,
        Type1: data.generalInfo.type1.map(ob => ob.type.name),
        Habitat: data.about.habitat,
        Habilité: data.generalInfo.abilities.map(hab => hab.ability.name),
        Poids: data.generalInfo.weight,
        Évolution: data.evolution.evolution ? data.evolution.evolution: 'Stade final',
        Form: data.about.shape,
        Egg_groups: data.about.egg_groups.map(egg => egg.name)
    }
    const keys = Object.keys(obj)
    return (
        <Card center>
            <div className="card-title">{title}</div>
            <div className="card-container">
                {
                    keys.map(key => (
                        (!["Habilité", "Type1", "Egg_groups"].includes(key))?(
                            <div className="card-section" key={key}>
                                <span className="card-key">{key}</span>

                                <span className="card-response">{obj[key]}</span> 

                            </div>
                        ):(
                            <div className="card-section" key={key}>
                                <span className="card-key">{key}</span>
                                <div>
                                    {
                                    obj[key].map(hab => (
                                        <span key={hab} style={{
                                            marginLeft: '15px', fontSize: '15px',
                                            backgroundColor: (key !== 'Habilité') ? colors[hab]: 'yellow',
                                            color: (key !== 'Habilité') ? 'inherit': 'black',
                                            padding: '5px',
                                            borderRadius: '5px'
                                            
                                            }}>{hab}</span>
                                    ))
                                    }
                                </div>
                            </div>
                                
                        )
                            
                    ))
                }
            </div>
        </Card>
    )
}

const AreneRight = ({data, title}) => {
    // const keys = Object.keys(data)
    const clean_texts = [...new Set(data.texts)]
    return (
        <Card right style={{overflowY: 'scroll', height: '500px', borderRadius: '0'}}>
            <div className="card-title">{title} de {data.species_name}</div>
            <div className="card-container">
                {
                    clean_texts.map((text, i) => (
                        <Text key={`${i}-text`} style={{
                            color: 'white', lineHeight: '20px',
                            fontSize:'15px', paddingLeft: '10px'
                            }}>{text}</Text>
                    ))
                }
            </div>
        </Card>
    )
}

const Text = styled.p`
    color: 'white';
    max-width: 20vw;
    overflow-y: 'scroll'
    font-size: '13px'
`


const Card = styled.div`
    background-color: rgb(0, 0, 0, .7);
    min-width: 25vw;
    min-height: 500px;
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
        align-items: center;
        justify-content: space-between;
        border-top: 1px solid gray;
        ${'' /* margin-bottom: 15px; */}
        color: white;
        height: 50px;
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
        font-size: 15px
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
    pokemonName: state.bdReducer.pokemonName,
    isFetching: state.rcReducer.isFetching,
    error: state.rcReducer.error,
    record: state.rcReducer.record
})
export default connect(mapStateToProps)(Pokemon)


// {
//     (key === 'Type1') ? (
//         <div>
//         {
//             obj[key].map(ob => (
//                 <span style={{
//                     backgroundColor: colors[ob.type.name],
//                     marginLeft: '15px', fontSize: '15px',
//                     padding: '5px', color: 'black',
//                     borderRadius: '5px'
//                 }} key={ob.type.name}>
//                   {ob.type.name}  
//                 </span>
//             ))
//         }
//         </div>
//     ):(
//         <span className="card-response">{obj[key]}</span> 
//     )
// }
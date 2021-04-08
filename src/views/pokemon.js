import * as React from 'react'
import {useParams} from 'react-router-dom'
import { connect } from 'react-redux'
import colors from '../utils/colors'
import styled from 'styled-components'
// import Pokedex from '../components/pokedex'
import Tilt from '../components/tilt'
import {NavList, PreviousPage} from './pokemonlist'
import Foot from '../components/footer'
import Search from '../components/search'
import Compare from '../components/comparesearch'
import {fetchPokemonRecord, fetchPokemonCompare} from '../store/actionTypes'
import {
    FullPageSpinner, Spinner,
} from '../lib/index'



const Pokemon = ({
    pokemonName, record,
    error, isFetching,
    cp_data, cp_isLoading, cp_error,
    dispatch
}) => {

    const [compare, setCompare] = React.useState(false)
    const [toCompareId, setToCompareId] = React.useState(null)

    const {id} = useParams()

    const handleComparison = (id, val) => {
        setCompare(true)
        console.log('xxxxx', val, compare)
        setToCompareId(id)
    }
    React.useEffect(() => {
        if(compare){
            dispatch(fetchPokemonCompare(toCompareId))
        }
        dispatch(fetchPokemonRecord(id))
    }, [dispatch, id, compare, toCompareId])

    if(isFetching || !record){
        console.log('rc')
        return <FullPageSpinner/>
    }
    // if(cp_isLoading || !cp_data){
    //     console.log('cp')
    //     return <FullPageSpinner/>
    // }

    return (
        <div>
            <NavList 
                search={<Search pokemonName={pokemonName} cStyle={{width: '79%'}}/>}
                previousPage={<PreviousPage/>} 
            />
            <Arene
                compare={compare}
                p_id={id}
                areneLeft={<AreneLeft data={record.generalInfo}/>}
                areneCenter={<AreneCenter data={record} title="Statistiques clés" compare={compare}/>}
                areneAbout={<AreneAbout data={record.about} title="À propos"/>}
                areneCenter_cp={<AreneCenter data={cp_data && cp_data} title="Statistiques clés" compare={compare}/>}
                areneRight={<AreneRight data={cp_data && cp_data.generalInfo}/>}
                searchCompare={<Compare handleComparison={handleComparison} pokemonName={pokemonName}/>}
            >
            </Arene>
            <Foot/>
        </div>
    )
}

const Arene = ({areneLeft, areneCenter, areneRight,
    areneAbout, pokemonType, p_id, 
    compare, searchCompare,
    areneCenter_cp,
}) => {

    return (
        <div style={{display: 'flex', justifyContent: 'center',
            backgroundImage: `url(https://pokeres.bastionbot.org/images/pokemon/${p_id}.png)`,
            height: '950px',
            backgroundSize: 'cover', backgroundColor: 'brown',
            margin: '80px 0', paddingTop: '60px',
        }}>
            <div style={{backgroundColor: colors[pokemonType]}}>
                {
                 !compare ?(
                    <div style={{display: 'flex', borderRadius: '15px'}}>
                        {areneLeft}
                        {areneCenter}
                        {areneAbout}
                    </div>
                 ):(
                    <div style={{display: 'flex', borderRadius: '15px'}}>
                        {areneLeft}
                        {areneCenter}
                        {areneCenter_cp}
                        {areneRight}
                    </div>
                 )
                }
                <div style={{position: 'relative'}}>
                    {searchCompare}
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

const AreneRight = ({data}) => {
    if(!data){
        return <Spinner/>
    }
    return (
        <Card right style={{minWidth: '17vw', display: 'grid', placeItems: 'center'}}>
            <Tilt data={data} color="steelblue" move/>
        </Card>
    )
}

const AreneCenter = ({data, title, compare}) => {
    if(!data){
        return <Spinner/>
    }
    const obj = {
        // Type: data.generalInfo.type,
        Type: data.generalInfo.type1.map(ob => ob.type.name),
        Habitat: data.about.habitat,
        Habilité: data.generalInfo.abilities.map(hab => hab.ability.name),
        Poids: data.generalInfo.weight,
        Évolution: data.evolution.evolution ? data.evolution.evolution: 'Stade final',
        Form: data.about.shape,
        Egg_groups: data.about.egg_groups.map(egg => egg.name)
    }
    const keys = Object.keys(obj)
    return (
        <Card center compare={compare}>
            <div className="card-title">{title}</div>
            <div className="card-container">
                {
                    keys.map(key => (
                        (!["Habilité", "Type", "Egg_groups"].includes(key))?(
                            <div className="card-section" key={key}>
                                <span className="card-key">{key}</span>
                                {
                                    (key === 'Poids')? (
                                        <span className="card-response">{obj[key]} Kg</span>
                                    ):(
                                        <span className="card-response">{obj[key]}</span>
                                    )
                                }

                            </div>
                        ):(
                            <div className="card-section" key={key}>
                                <span className="card-key">{key}</span>
                                <div>
                                    {
                                    obj[key].map(hab => (
                                        <span key={hab} style={{
                                            marginLeft: '15px', fontSize: compare ? "11px" : '15px',
                                            backgroundColor: (!['Habilité', 'Egg_groups'].includes(key)) ? colors[hab]: 'yellow',
                                            color: 'black',
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

const AreneAbout = ({data, title}) => {
    // const keys = Object.keys(data)
    const clean_texts = [...new Set(data.texts)]
    return (
        <Card style={{overflowY: 'scroll', height: '500px', borderRadius: '0'}}>
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
    min-width: ${({compare}) => compare? "23vw": "27vw"};
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
        font-size: ${({compare}) => compare ? "11px" : "15px"};
    }

    .card-key{
        text-align: left;
        font-weight: bold;
        color: gray;
        font-size: ${({compare}) => compare ? "11px" : "20px"};
        color: white;
    }
`
const mapStateToProps = state => ({
    pokemonName: state.bdReducer.pokemonName,
    isFetching: state.rcReducer.isLoading,
    error: state.rcReducer.error,
    record: state.rcReducer.record,
    cp_data: state.cpReducer.compare,
    cp_isLoading: state.cpReducer.isLoading,
    cp_error: state.cpReducer.error,
})
export default connect(mapStateToProps)(Pokemon)

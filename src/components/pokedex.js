import * as React from 'react'
import { useHistory } from 'react-router-dom'
import Tilt from './tilt'
import {HiOutlineChevronLeft, HiOutlineChevronRight} from 'react-icons/hi'
import styled from 'styled-components'
import {
    getStorageValues,
    storeLocally, removeStorageValue,
} from '../utils/storage'


const Pokedex = ({
    number,
    marginTop,
    pokemonData,
    pokemonType,
    nav,
    ...rest}) => {

    return (
        <div style={{ position:'relative', height: '100%', margin: '160px 0', ...marginTop}}>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', position: 'relative'}}>
                {/* <PokedexNav scrollBehavior /> */}
                {nav}
                {
                    pokemonData &&
                    pokemonData.summary.map(v => <Tilt color="cadetblue" data={v}  key={`${v.id}-${v.name}`} />)
                }
            </div>
        </div>
    )
}


export const SearchMenu = ({value, disMiss, isOpen, pokemonName, isValid, ...rest}) => {
    
    const history = useHistory()

    const [suggestions, setSuggestions] = React.useState(() => getStorageValues() || [])
    
    const handleRemoveSuggestion = (sugg) => {
        setSuggestions([...suggestions.filter(val => val !== sugg)])
        removeStorageValue(sugg)
    }
    
    const handleClickSuggestion = (sugg) => {
        let data = pokemonName.find(val => val.name === sugg)
        history.push(`/pokemon/${data.id}`)
        disMiss()
    }

    const handleClick = async (id, val) => {
        await storeLocally(val)
        setSuggestions([...suggestions, val])
        history.push(`/pokemon/${id}`)
        disMiss()
    }
    
    
    let data = pokemonName && pokemonName.filter(({name}) => value && name.startsWith(value.trim().toLowerCase()))
    data = data.slice(0, 10)
    const customFilterPanelStyle = (!data.length && value) ? (
            {height: '120px'} // hauteur sans aucun resultat
            ) : (!value) ? (
            {height: '20vh'} //hauteur avec sections suggerees
            ) : (
            {height: '500px'} // hauteur avec pokemons suggerees
    )

    return (
        <>
        {isOpen && (
            <>
            <DissmissSearch onClick={() => disMiss()}></DissmissSearch>
            <FilterPanel style={{...customFilterPanelStyle}}>
                <div style={{display: 'flex', marginBottom: '15px'}}>
                    {
                        (suggestions.length)? suggestions.map(sugg => {
                            return (
                                <div style={{display: 'flex', fontSize: '17px',
                                    marginLeft: '20px', height: '25px',
                                    backgroundColor: '#dcdcdc', borderRadius: '20px', padding: '7px',
                                    }} key={sugg}>
                                    <RecentSuggestion style={{marginRight: '5px', cursor: 'pointer'}}
                                        onClick={() =>  handleClickSuggestion(sugg)}
                                    >
                                        {sugg}
                                    </RecentSuggestion>
                                    <DeleteRecent onClick={() => handleRemoveSuggestion(sugg)}>
                                        <span style={{color: 'white', fontSize: '18px'}}>&times;</span>
                                    </DeleteRecent>
                                </div>
                            )
                        }) : null
                    }
                </div>
            {
                !value? (
                    <>
                        {null}
                    </>
                ):  data.length ? (
                    data && data.map(({name, id}) => {
                        const val = value.trim().toLowerCase()
                        const len = val.length
                        const left = name.slice(0, len)
                        const right = name.slice(len)
                        return (
                                <FilterItem
                                    key={`${id}-${name}`}
                                    onClick={() => handleClick(id, name)}>
                                    <span style={{color: 'gray'}}>{left}</span>
                                    <span style={{fontWeight: '600'}}>{right}</span>
                                </FilterItem>
                        )
                    })
                ):(
                    <p style={{paddingLeft: '20px',
                        fontSize: '19px', marginTop: '7px'}}>
                        Aucun résultat ne correspond à votre recherche...
                    </p>
                )
            }
            </FilterPanel>
        </>
        )
        }
    </>
    )
}

export const PokedexNav = ({
    scrollBehavior,navOff,
    nextPage, previousPage,
    nextUrl, prevUrl
}) => {
    const [offset, setOffset] = React.useState(0)

    React.useEffect(() => {
        if(!scrollBehavior){
            return 
        }
        window.onscroll = () => {
            setOffset(window.pageYOffset)
        }
        return () => window.removeEventListener('scroll', window.onscroll)
    })

    const style = offset ? (
            {position: 'fixed', top:'24%', width: '100%'}
        ) : (
            {position: 'fixed', top:'80px'}
    )
    
    const navCircleStyle = !offset ? (
            {backgroundImage: 'none'}
        ) : (
            {backgroundImage: 'linear-gradient(to bottom right, #b13cff,#fd9d52)'}
    )
    
    const disabledLeft = !prevUrl ? {cursor: 'not-allowed', backgroundColor: 'darkgray'} : {cursor: 'pointer'}
    
    const disabledRight = !nextUrl ? {cursor: 'not-allowed', backgroundColor: 'darkgray'} : {cursor: 'pointer'}
    
    const handleNextPage = nextUrl => {
        console.log('dispatch next')
        if(!nextUrl) return
        nextPage(nextUrl)
    }

    const handlePreviousPage = prevUrl => {
        console.log('dispatch prev')
        if(!prevUrl) return
        previousPage(prevUrl)
    }

    if(navOff){
        return null
    }
    return (
        <div style={style}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <CircleNavLeft style={navCircleStyle}
                    disabledLeft={disabledLeft}
                    onClick={() => handlePreviousPage(prevUrl)}
                >
                    <HiOutlineChevronLeft style={{width: '45px', height: '45px', color: '#dcdcdc'}}/>
                </CircleNavLeft>
                <CircleNavRight style={navCircleStyle}
                    disabledRight={disabledRight}
                    onClick={() => handleNextPage(nextUrl)}
                >
                    <HiOutlineChevronRight style={{width: '45px', height: '45px', color: '#dcdcdc'}}/>
                </CircleNavRight>
            </div>
        </div>
    )
}

const RecentSuggestion = styled.div`
    :hover&{
        color: steelblue;
    }
`


const DeleteRecent = styled.button`
    background: gray;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    border: none;
    color: 'white';
    :hover&{
        background-Image: linear-gradient(to bottom right, #b13cff,#fd9d52);
        outline: none;
        cursor: pointer;
    }
`

const CircleNavLeft = styled.div(({style, disabledLeft}) =>(
    {
        width: '55px', height: '55px', borderRadius: '50%',
        display:'grid', placeItems: 'center',
        boxShadow: '0px 2px 8px rgb(0,0,0,.7)',
        margin:'10px 10px', cursor: 'pointer',
        ...style, ...disabledLeft
    }
))

const CircleNavRight = styled.div(({style, disabledRight}) =>(
    {
        width: '55px', height: '55px', borderRadius: '50%',
        display:'grid', placeItems: 'center',
        boxShadow: '0px 2px 8px rgb(0,0,0,.7)',
        margin:'10px 10px', cursor: 'pointer',
        ...style, ...disabledRight,
    }
))

const FilterItem = styled.div({
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
    fontFamily: 'ubuntu',
    marginBottom: '10px',
    paddingLeft: '20px',
    height: '25px',
    '&:hover':{backgroundColor: '#f1f2f7'},
    cursor: 'pointer'
})

const DissmissSearch = styled.div(props => (
    {
        height: '100vh',
        width: '100vw',
        backgroundColor: 'rgb(0, 0, 0, .6)',
        position: 'absolute',
        top: '65px',
        zIndex: '2',
        left: '49%',
        transform: 'translateX(-50%)'
    }
))

const FilterPanel = styled.div(props => (
    {
        height: '80vh', width: '70vw', backgroundColor: 'white',
        position: 'absolute', left: '50%', transform: 'translateX(-50%)',
        borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px',
        padding: '10px 0px',  zIndex: '3', top: '62px'
    }
))


export default Pokedex
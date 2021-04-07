import * as React from 'react'
import { useHistory } from 'react-router-dom'
import Tilt from './tilt'
import {HiOutlineChevronLeft, HiOutlineChevronRight} from 'react-icons/hi'
import styled from 'styled-components'


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


export const SearchMenu = ({value, disMiss, isOpen, pokemonName, ...rest}) => {
    const history = useHistory()
    const handleClick = (id) => {
        console.log('guitare', id)
        history.push(`/pokemon/${id}`)
        disMiss()
    }
    let data = pokemonName && pokemonName.filter(({name}) => value && name.startsWith(value.trim()))
    data = data.slice(0, 10)
    const customFilterPanelStyle = (!data.length && value) ? (
            {height: '50px'} // hauteur sans aucun resultat
            ) : (!value) ? (
            {height: '60vh'} //hauteur avec sections suggerees
            ) : (
            {height: '65vh'}) // hauteur avec pokemons suggerees
    return (
        <>
        {isOpen && (
            <>
            <DissmissSearch onClick={() => disMiss()}></DissmissSearch>
            <FilterPanel style={{...customFilterPanelStyle}}>
            {
                !value ? (
                    <>
                    <Suggestion pk_id={3} SuggestionType="Form" pokemonCategorie="Ball" />
                    <Suggestion pk_id={2} SuggestionType="Egg group" pokemonCategorie="Dragon" />
                    </>
                ):  data.length ? (
                    data && data.map(({name, id}) => {
                        const val = value.trim()
                        const len = val.length
                        const left = name.slice(0, len)
                        const right = name.slice(len)
                        return (
                                <FilterItem
                                    key={`${id}-${name}`}
                                    onClick={() => handleClick(id)}>
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

const Suggestion = ({pk_id, SuggestionType, pokemonCategorie}) => {
    return (
        <div style={{paddingLeft: '20px'}}>
            <h3>{SuggestionType}</h3>
            <div style={{display: 'flex'}}>
                <div style={{width: '150px', height: '100px', borderRadius: '15px',
                    position: 'relative',
                    margin: '0 20px'
                }}>
                    <div style={{
                            width: '150px', height: '100px',
                            borderRadius: '15px', backgroundColor: 'rgb(0, 0, 0, .7)',
                            zIndex: '20', position: 'absolute', top: '0', color: 'white',
                            display: 'grid', placeItems: 'center', fontSize: '20px'
                        }}
                    >
                    <h3>{pokemonCategorie}</h3>
                    </div>
                    <img src={`https://pokeres.bastionbot.org/images/pokemon/${pk_id}.png`}
                        alt={`${pokemonCategorie}-${pk_id}`} width="150px" height="100px"
                    />
                </div>
            </div>
        </div>
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
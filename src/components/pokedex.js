import * as React from 'react'
import { useContextSearch } from './searchcontext'
import Tilt from './tilt'
import {HiOutlineChevronLeft, HiOutlineChevronRight} from 'react-icons/hi'
import styled from 'styled-components'


const Pokedex = ({pokemonType, number, ...rest}) => {
    const arr = Array.from({length: number}, (i, v)=> v+1)
    const captures = Array.from({length: 5}, (i, v) => v + 1)
    return (
        <div style={{ position:'relative', height: '100%', margin: '20vh 0',}}>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', position: 'relative'}}>
                <PokedexNav scrollBehavior {...rest}/>
                {
                    arr.map(v => {
                        if(captures.includes(v)){
                            return <Tilt p_id={v} color="cadetblue" key={v} capt/>
                        }
                        return (
                                <Tilt p_id={v} color="cadetblue" key={v}/>
                        )
                    })
                }
            </div>
        </div>
    )
}


export const SearchMenu = () => {
    const [isOpen, setIsOpen] = useContextSearch()
    return (
        <>
        {isOpen && (
            <>
            <DissmissSearch onClick={() => setIsOpen(false)}></DissmissSearch>
            <FilterPanel>
                <Suggestion pk_id={3} SuggestionType="Form" pokemonCategorie="Ball" />
                <Suggestion pk_id={2} SuggestionType="Egg group" pokemonCategorie="Dragon" />
            </FilterPanel>
        </>
        )
        }
    </>
    )
}

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
        height: '90vh', width: '70vw', backgroundColor: 'white',
        position: 'absolute', left: '50%', transform: 'translateX(-50%)',
        borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px',
        padding: '0 50px',  zIndex: '3', top: '64px'
    }
))

const Suggestion = ({pk_id, SuggestionType, pokemonCategorie}) => {
    return (
        <div>
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


const PokedexNav = ({navLeft, scrollBehavior, navRight, navOff}) => {
    const [offset, setOffset] = React.useState(0)
    React.useEffect(() => {
        if(!scrollBehavior){
            return 
        }
        window.onscroll = () => {
            setOffset(window.pageYOffset)
        }
    })
    const style = offset ? (
            {position: 'fixed', top:'80px', width: '100%'}
        ) : (
            {position: 'fixed', top:'80px'}
        )
    const navCircleStyle = !offset ? (
            {backgroundImage: 'none'}
        ) : (
            {backgroundImage: 'linear-gradient(to bottom right, #b13cff,#fd9d52)'}
        )
    
    if(navOff){
        return null
    }
    return (
        <div style={style}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <CircleNav style={navCircleStyle}
                >
                    <HiOutlineChevronLeft style={{width: '45px', height: '45px', color: '#dcdcdc'}}/>
                </CircleNav>
                <CircleNav style={navCircleStyle}
                >
                    <HiOutlineChevronRight style={{width: '45px', height: '45px', color: '#dcdcdc'}}/>
                </CircleNav>
            </div>
        </div>
    )
}


const CircleNav = styled.div((props) =>(
    {
        width: '55px', height: '55px', borderRadius: '50%',
        display:'grid', placeItems: 'center',
        boxShadow: '0px 2px 8px rgb(0,0,0,.7)',
        margin:'10px 10px', cursor: 'pointer',
        ...props.style
    }
))

export default Pokedex
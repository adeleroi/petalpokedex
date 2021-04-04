import * as React from 'react'
import { useContextMenu } from './searchcontext'
import Tilt from './tilt'
import {HiOutlineChevronLeft, HiOutlineChevronRight} from 'react-icons/hi'


const Pokedex = () => {
    const arr = Array.from({length: 49}, (i, v)=> v+1)
    return (
        <div style={{ position:'relative'}}>
            <SearchMenu />
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', position: 'relative'}}>
                <PokedexNav scrollBehavior />
                {
                    arr.map(v => {
                    return (
                            <Tilt p_id={v} color="cadetblue" key={v}/>
                    )
                    })
                }
            </div>
        </div>
    )
}


const SearchMenu = () => {
    const [isOpen, setIsOpen] = useContextMenu()
    return (
        <>
        {isOpen && (
            <>
            <div style={{height: '100%', width: '100vw',
                backgroundColor: 'rgb(0, 0, 0, .4)',position: 'absolute', top: '-9px',
                zIndex: '2'
                }}
                onClick={() => setIsOpen(false)}
                >
            </div>
            <div style={{height: '80vh', width: '80vw', backgroundColor: 'white',
                position: 'absolute', left: '50%', transform: 'translateX(-50%)',
                borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px',
                padding: '0 50px',  zIndex: '3', top: '0', borderRadius: '15px'
                }}
            >
                <Suggestion pk_id={3} SuggestionType="Form" pokemonCategorie="Ball" />
                <Suggestion pk_id={2} SuggestionType="Egg group" pokemonCategorie="Dragon" />
            </div>
        </>
        )
        }
    </>
    )
}


const Suggestion = ({pk_id, SuggestionType, pokemonCategorie}) => {
    return (
        <>
        <div>
            <h3>{SuggestionType}</h3>
            <div style={{display: 'flex'}}>
            {
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
            }
            </div>
        </div>
        </>
    )
}


const PokedexNav = ({navLeft, scrollBehavior, navRight}) => {
    const [offset, setOffset] = React.useState(0)
    React.useEffect(() => {
        if(!scrollBehavior){
            return 
        }
        window.onscroll = () => {
            setOffset(window.pageYOffset)
        }
    })
    console.log(offset)
    const style = offset ? (
        {position: 'fixed', top:'80px', width: '100%'}
     ) : (
         {position: 'fixed', top:'80px'}
     )
    const navCircleStyle = !offset ? {backgroundImage: 'none'} : {backgroundImage: 'linear-gradient(to bottom right, #b13cff,#fd9d52)'}
    return (
        <div style={style}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div style={{width: '55px', height: '55px', borderRadius: '50%',
                    display:'grid', placeItems: 'center',
                    boxShadow: '0px 2px 8px rgb(0,0,0,.7)',
                    margin:'10px 10px', cursor: 'pointer', ...navCircleStyle
                    }}
                >
                    <HiOutlineChevronLeft style={{width: '45px', height: '45px', color: '#dcdcdc'}}/>
                </div>
                <div style={{width: '55px', height: '55px', borderRadius: '50%',
                    display:'grid', placeItems: 'center',
                    boxShadow: '0px 2px 8px rgb(0,0,0,.7)',
                    margin:'10px 10px', cursor: 'pointer', ...navCircleStyle
                    }}
                >
                    <HiOutlineChevronRight style={{width: '45px', height: '45px', color: '#dcdcdc'}}/>
                </div>
            </div>
        </div>
    )
}

export default Pokedex
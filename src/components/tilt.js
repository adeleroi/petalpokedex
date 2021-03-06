import * as React from 'react'
import VanillaTilt from 'vanilla-tilt'
import pokeball from '../image/pokeballcard.png'
import {Link} from 'react-router-dom'
import colors from '../utils/colors'
import {capitalizeName} from '../utils/format'
// const options = {
//     scale: 1.2,
//     speed: 300,
//     max: 30
// }

const Tilt = ({options, move, p_id, color, capt, data}) => {
    const el = React.useRef()
    React.useEffect(() => {
        if(!move){
            return
        }
        VanillaTilt.init(el.current, options)
    }, [options, move])
    return (
        <div ref={el} style={{margin: '0 10px'}}>
            <Link to={`/pokemon/${data.id}`} style={{color: 'inherit', textDecoration: 'none'}}>
            <div style={{
                backgroundColor: colors[data.type] || color, width:"250px",
                boxShadow: '1px 4px 16px rgb(0, 0, 0, 0.7)',
                height:"380px", margin: '10px 0px',
                borderRadius: '12px', display: 'grid',
                placeItems: 'center'
                }}
            >
                    <div style={{width: '150px', height: '150px',
                        borderRadius: '50%', display: 'grid',
                        placeItems: 'center',
                        backgroundColor: 'white',
                        backgroundImage: !capt ? `url(${pokeball})`: 'none',
                        backgroundSize: 'cover'
                        }}
                    >
                    <img src={`https://cdn.traction.one/pokedex/pokemon/${data.id}.png`} alt="" width="170px" height="200px"/>
                    </div>
                    <div style={{lineHeight: "25px", textAlign: 'center', fontFamily:'Roboto'}}>
                            <h3 style={{
                                margin:"0", backgroundColor: 'rgb(0, 0, 0, .1)',
                                borderRadius: '10px', marginBottom: '5px', padding: '2px 10px'
                            }}>
                                {capitalizeName(data.name)}
                            </h3>
                            <p style={{margin:"0"}}>Type: {capitalizeName(data.type)}</p>
                            {
                                data.evolution &&
                                <p style={{margin:"0", width: '100%'}}>Evolution: {capitalizeName(data.evolution)}</p>
                            }
                    </div>
            </div>
            </Link>
        </div>
    )
}

export default Tilt

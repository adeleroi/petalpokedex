import * as React from 'react'
import VanillaTilt from 'vanilla-tilt'


const options = {
    scale: 1.2,
    speed: 300,
    max: 30
}

// https://i.imgur.com/CKl3eLr.jpg
const Tilt = ({options, p_id, color}) => {
    const el = React.useRef()
    React.useEffect(() => {
        VanillaTilt.init(el.current, options)
    }, [options])
    return (
        <div idstyle={{
            width: "270px", height: "400px",
            borderRadius: "15px",
            BackgroundColor: "white"
            }}
        ref={el}>
            <div style={{backgroundColor:  color, width:"250px", height:"380px", boxShadow: '1px 4px 16px rgb(0, 0, 0, 0.5)',
            margin: '10px 10px', borderRadius: '12px', position: 'relative', display: 'grid', placeItems: 'center'
            }}>
                <div style={{width: '200px', height: '200px',
                borderRadius: '50%', display: 'grid', placeItems: 'center',
                backgroundColor: 'white', zIndex:'0'
                }}>

                </div>
                <img src={`https://pokeres.bastionbot.org/images/pokemon/${p_id}.png`} alt="img" width="170px"
                height="270px" 
                    style={{
                    // boxShadow: '1px 4px 16px rgb(0, 0, 0, 0.5)',
                    borderRadius: '12px',
                    position: 'absolute', top: '55px'}}
                />
            </div>
        </div>
    )
}

export default Tilt
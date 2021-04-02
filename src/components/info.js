import * as React from 'react'
import Tilt from './tilt'
import blob from '../image/blobinfo.svg'
// import vector from '../image/Vector.svg'
import blobbottom from '../image/blobbottom.svg'


const InfoSection = ({options}) => {
    return (
        <div style={{
            height: '70vh', width: '100vw',
            display: 'grid', placeItems:'center',
            // backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            // backgroundColor: '#E3E2E2'
            }}

        >
            <div style={{
                width: '100vw',
                height: '260px',
                backgroundImage: `url(${blob})`,
                backgroundRepeat: 'no-repeat'
                }}
            >

            </div>
            <div style={{width: '100vw', display: 'grid', placeItems: 'center',
                backgroundColor: '#F6F6F6', paddingBottom: '35px'
                }}>
                <h1 style={{fontSize: '35px', padding: '40px 0'}}>Essayer de les capturer tous</h1>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Tilt options={options} p_id="9" color="wheat" />
                    <Tilt options={options} p_id="149" color="cadetblue" />
                    <Tilt options={options} p_id="131" color="cornflowerblue" />
                    <Tilt options={options} p_id="151" color="black" />
                </div>
            </div>
            <div style={{
                width: '100vw',
                height: '200px',
                backgroundImage: `url(${blobbottom})`,
                backgroundRepeat: 'no-repeat'
                }}
            >

            </div>
        </div>
    )
}

export default InfoSection
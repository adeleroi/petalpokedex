import * as React from 'react'
import Tilt from './tilt'
import blob from '../image/blobinfo.svg'
// import vector from '../image/Vector.svg'
import blobbottom from '../image/blobbottom.svg'
import styled from 'styled-components'

const InfoSection = ({options}) => {
    return (
        <div style={{
            height: '100%', width: '100vw',
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
                <Heading>Capturez les tous</Heading>
                <p style={{marginBottom: '40px', fontSize: "20px"}}>
                    Montrez à vos adversaires que vous êtes le meilleur des dresseurs.
                </p>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Tilt options={options} move p_id="9" color="wheat" />
                    <Tilt options={options} move p_id="149" color="cadetblue" />
                    <Tilt options={options} move p_id="131" color="cornflowerblue" />
                    <Tilt options={options} move p_id="151" color="black" />
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

const Heading = styled.h1`
  background: linear-gradient(to bottom right,#b13cff,#fd9d52);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: '45px';
  padding: '40px 0';

`

export default InfoSection
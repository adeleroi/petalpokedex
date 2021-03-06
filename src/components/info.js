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
            backgroundRepeat: 'no-repeat',
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
                <Heading>Retrouvez les tous</Heading>
                <p style={{marginBottom: '40px', fontSize: "20px"}}>
                    Visitez notre collection unique de pokémons rares.
                </p>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Tilt options={options} move data={{type:'water', name: 'Blastoise', id:'9'}} />
                    <Tilt options={options} move data={{type:'dragon', name: 'Dragonite', id:'149'}} />
                    <Tilt options={options} move data={{type:'ice', name: 'Lapras', id:'131'}} />
                    <Tilt options={options} move data={{type:'psychic', name: 'Mew', id:'151'}} />
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
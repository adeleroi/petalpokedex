import * as React from 'react'
import Foot from '../components/footer'
import { HomeHeader } from '../components/header'
import InfoSection from '../components/info'
import ScrollSection from '../components/scroll'
// import Tilt from '../components/tilt'

const Home = () => {
    return (
        <>
            <HomeHeader/>
            {/* <Tilt options={{scale: 1.2, speed: 300, max: 30}}/> */}
            <InfoSection options={{scale: 1, speed: 0, max: 30}}/>
            <Foot/>
        </>
    )
}

export default Home
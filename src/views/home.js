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
            <InfoSection options={{scale: 1, speed: 0, max: 30}}/>
            <Foot/>
        </>
    )
}

export default Home
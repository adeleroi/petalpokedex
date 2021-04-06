import * as React from 'react'
import Foot from '../components/footer'
import { HomeHeader } from '../components/header'
import InfoSection from '../components/info'
import Partenaires from '../components/partenaires'

const Home = () => {
    return (
        <>
            <HomeHeader/>
            <InfoSection options={{scale: 1, speed: 0, max: 30}}/>
            <Partenaires/>
            <Foot/>
        </>
    )
}

export default Home
import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {NavBtn, DemoBtn} from '../lib'

const HomeHeader = () => {
    const navBtnStyle = { height: '35px', width: '110px', backgroundColor: 'white' }
    return (
        <header>
            <Hero>
                <div style={{display: 'flex', justifyContent: 'space-between', padding: '0 100px'}}>
                    <nav style={{display: 'flex', justifyContent: 'space-between', width: '100%', height: '80px', alignItems: 'center'}}>
                        <Link to="/">
                            <img alt="logo"
                                src="https://fontmeme.com/permalink/210402/6f2dbbe930d5f8f71173dcad22fff2f1.png"
                            />
                        </Link>
                        <div style={{display: 'flex', width: '230px', justifyContent: 'space-between'}}>
                        <Link to="/pokemonlist" style={{
                            textDecoration: 'none',  
                        }}
                        >
                            <NavBtn style={{
                                height: '35px',
                                width: '110px', backgroundColor: 'white',
                            }}>
                                Demo
                            </NavBtn>
                        </Link>
                        <Link to="/pokemonlist" style={{
                            textDecoration: 'none',
                        }}
                        >
                            <NavBtn style={{
                                height: '35px',
                                width: '110px', backgroundColor: 'purple',
                                color: 'white'
                            }}>
                                Log in
                            </NavBtn>
                        </Link>
                        </div>
                    </nav>
                </div>
                <div style={{
                    width: '100%', display: 'grid',
                    placeItems: 'center', padding: '100px 0'
                    }}>
                    <h1 style={{color: 'white', textAlign: "center",
                        fontSize: '45px', fontWeight: '700',
                        maxWidth: '60vw'
                    }}>
                        Entrer dans l'univers des pokémons
                    </h1>
                    <div style={{width: '50vw'}}>
                        <p style={{textAlign: 'center', color: 'white', fontSize: '20px', fontWeight: '300'}}>
                        Que vous soyez dresseur, dresseuse, fan de longue date ou tout simplement amateur de pokémon,
                        pokÉdex est fait pour vous. Accédez à la plus fun et à la plus grande encyclopédie pokémon jamais réalisée.
                        </p>
                    </div>
                    <div style={{display: 'flex', width: '520px', justifyContent: 'space-between', padding: '40px 0'}}>
                        <Link to="/pokemonlist" style={{
                            textDecoration: 'none',
                        }}
                        >
                            <NavBtn style={{
                                height: '50px',
                                width: '250px', backgroundColor: 'white',
                                fontSize: '19px'
                            }}>
                                Commencer Demo
                            </NavBtn>
                        </Link>
                
                        <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                            <NavBtn style={{
                                height: '50px', width: '250px',
                                backgroundColor: 'black', color: "white",
                                fontSize: "19px"
                            }}>
                                Accédez à notre API
                            </NavBtn>                        
                        </a>
                    </div>
                </div>
            </Hero>
        </header>
    )
}


const ListNav = () => {
    return (
        <></>
    )
}


const Hero = styled.div`
    ${'' /* background-Image: linear-gradient(0deg, #b13cff, #dd45d3 20%, #fd9d52); */}
    background-Image: linear-gradient(to bottom right, #b13cff,#fd9d52);
    height: 600px;
    width: 100vw;

`

export {
    HomeHeader,
    ListNav
}
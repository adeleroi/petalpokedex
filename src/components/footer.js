import { Link } from "react-router-dom"
import pokeballcard from '../image/pokeballcard.png'
import styled from 'styled-components'


const Foot = () => {
    return (
        <div style={{width: "100%", height: "40vh", backgroundColor: 'black',
        padding: '30px', paddingBottom: "0", display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
        }}>
            <ul style={{display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
                <li style={{position: 'absolute', left: '150px'}}>
                    <Link to="/">
                        <img src={pokeballcard} width="30px" height="30px"/>
                    </Link>
                </li>
                <li style={{display: 'grid', placeItems: 'center'}}>
                    <h3 style={{color: 'white'}}>Compagnie</h3>
                    <List>
                        <li style={{color: 'white', listStyle: 'none'}}>PetalMD</li>
                        <li style={{color: 'white', listStyle: 'none'}}>PetalMD</li>
                        <li style={{color: 'white', listStyle: 'none'}}>PetalMD</li>
                        <li style={{color: 'white', listStyle: 'none'}}>PetalMD</li>
                    </List>
                </li>
                <li>
                    <h3 style={{color: 'white'}}>Produits</h3>
                    <List>
                        <li style={{color: 'white', listStyle: 'none'}}>
                        <a href="https://www.petalmd.com/fr/xacte-facturation-medicale-fonctionnalites?hsCtaTracking=ae584903-b19b-4eb9-8631-7e752d7c8561%7C511adfe6-83a0-4e9b-84ab-b2868d2880d1" 
                            style={{textDecoration: 'none', color: 'white'}}
                            target="_blank" rel="noopener noreferrer"
                            >
                            Xacte
                        </a>
                        </li>
                        <li style={{color: 'white', listStyle: 'none'}}>
                        <a href="https://www.petalmd.com/fr/xacte-facturation-medicale-fonctionnalites?hsCtaTracking=ae584903-b19b-4eb9-8631-7e752d7c8561%7C511adfe6-83a0-4e9b-84ab-b2868d2880d1" 
                            style={{textDecoration: 'none', color: 'white'}}
                            target="_blank" rel="noopener noreferrer"
                            >
                            Xacte
                        </a>
                        </li>
                        <li style={{color: 'white', listStyle: 'none'}}>
                        <a href="https://www.petalmd.com/fr/xacte-facturation-medicale-fonctionnalites?hsCtaTracking=ae584903-b19b-4eb9-8631-7e752d7c8561%7C511adfe6-83a0-4e9b-84ab-b2868d2880d1" 
                            target="_blank" rel="noopener noreferrer"
                            style={{textDecoration: 'none', color: 'white'}}>
                            Xacte
                        </a>
                        </li>
                        <li style={{color: 'white', listStyle: 'none'}}>
                        <a href="https://www.petalmd.com/fr/xacte-facturation-medicale-fonctionnalites?hsCtaTracking=ae584903-b19b-4eb9-8631-7e752d7c8561%7C511adfe6-83a0-4e9b-84ab-b2868d2880d1" 
                            target="_blank" rel="noopener noreferrer"
                            style={{textDecoration: 'none', color: 'white'}}>
                            Xacte
                        </a>
                        </li>
                    </List>
                </li>
                <li>
                    <h3 style={{color: 'white'}}>Retrouvez Nous</h3>
                    <List>
                        <li style={{color: 'white', listStyle: 'none'}}>
                        <a href="https://www.linkedin.com/in/ange-wilfried/" 
                            target="_blank" rel="noopener noreferrer"
                            style={{textDecoration: 'none', color: 'white'}}>
                            Linkedin
                        </a>
                        </li>
                        <li style={{color: 'white', listStyle: 'none'}}>
                        <a href="https://www.facebook.com/petalmd" 
                            target="_blank" rel="noopener noreferrer"
                            style={{textDecoration: 'none', color: 'white'}}>
                            facebook
                        </a>
                        </li>
                        <li style={{color: 'white', listStyle: 'none'}}>
                        <a href="https://twitter.com/Petal_MD" 
                            target="_blank" rel="noopener noreferrer"
                            style={{textDecoration: 'none', color: 'white'}}>
                            twitter
                        </a>
                        </li>
                        <li style={{color: 'white', listStyle: 'none'}}>Instagram</li>
                    </List>
                </li>
                <li>
                    <h3 style={{color: 'white'}}>Contact</h3>
                    <List>
                        <li style={{color: 'white', listStyle: 'none'}}>
                            <a href="mailto:wilfriednguess@gmail.com"
                            style={{textDecoration: 'none', color: 'white'}}
                            >
                            wilfriednguess@gmail.com
                            </a>
                        </li>
                        <li style={{color: 'white', listStyle: 'none'}}>
                            <a href="tel:5817774338"
                            style={{textDecoration: 'none', color: 'white'}}>

                            (581) 777 4338
                            </a>
                        </li>
                        <li style={{color: 'white', listStyle: 'none'}}>
                            <a href="mailto:wilfriednguess@gmail.com"
                                style={{textDecoration: 'none', color: 'white'}}
                                >
                                wilfriednguess@gmail.com
                            </a>
                        </li>
                        <li style={{color: 'white', listStyle: 'none'}}>
                            <a href="tel:5817774338"
                                style={{textDecoration: 'none', color: 'white'}}
                                >
                                (581) 777 4338
                            </a>
                        </li>
                    </List>
                </li>
            </ul>
            <div style={{width: '100%', borderTop: '1px solid white', paddingTop: '10px', paddingBottom: '10px'}}>
                <span style={{color: 'white'}}>Copyright {new Date().getFullYear()} PokEdex</span>
            </div>
        </div>
    )
}

const List = styled.ul`
padding: 0;
line-height: 25px;
`

export default Foot
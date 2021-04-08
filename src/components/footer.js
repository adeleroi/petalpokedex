import pokeballcard from '../image/pokeballcard.png'
import styled from 'styled-components'


const Foot = () => {
    return (
        <div style={{height: "350px", backgroundColor: 'black',
            padding: '50px 80px', paddingBottom: "0", display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            
        }}
        >
            <ul style={{display: 'flex', position: 'relative', justifyContent: 'space-between', padding: '0'}}>
                <li style={{position: 'absolute', left: '0', top: '-40px'}}>
                    <a href="#root">
                        <img src={pokeballcard} width="30px" height="30px" alt=""/>
                    </a>
                </li>
                <li>
                    <h3 style={{color: 'white'}}>Compagnie</h3>
                    <List>
                        <li style={{color: 'white', listStyle: 'none'}}>À propos</li>
                        <li style={{color: 'white', listStyle: 'none'}}>Carrières</li>
                        <li style={{color: 'white', listStyle: 'none'}}>Pourquoi PokÉdex?</li>
                    </List>
                </li>
                <li>
                    <h3 style={{color: 'white'}}>Produits</h3>
                    <List>
                        <li style={{color: 'white', listStyle: 'none'}}>
                        <a href="https://www.linkedin.com/in/ange-wilfried/" 
                            style={{textDecoration: 'none', color: 'white'}}
                            target="_blank" rel="noopener noreferrer"
                            >
                            Pokémon Go
                        </a>
                        </li>
                        <li style={{color: 'white', listStyle: 'none'}}>
                        <a href="https://www.linkedin.com/in/ange-wilfried/" 
                            style={{textDecoration: 'none', color: 'white'}}
                            target="_blank" rel="noopener noreferrer"
                            >
                            Pokémon Or
                        </a>
                        </li>
                        <li style={{color: 'white', listStyle: 'none'}}>
                        <a href="https://www.linkedin.com/in/ange-wilfried/" 
                            target="_blank" rel="noopener noreferrer"
                            style={{textDecoration: 'none', color: 'white'}}>
                            Pokémon Diamond
                        </a>
                        </li>
                        <li style={{color: 'white', listStyle: 'none'}}>
                        <a href="https://www.linkedin.com/in/ange-wilfried/" 
                            target="_blank" rel="noopener noreferrer"
                            style={{textDecoration: 'none', color: 'white'}}>
                            Pokémon Sword and Pokémon Shield
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
                <CopyRight>Copyright &copy;	{new Date().getFullYear()}, PokÉdex. Tous droits réservés.</CopyRight>
            </div>
        </div>
    )
}

const List = styled.ul`
padding: 0;
line-height: 25px;
`
const CopyRight = styled.span`
background: linear-gradient(to bottom right,#b13cff,#fd9d52);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
export default Foot
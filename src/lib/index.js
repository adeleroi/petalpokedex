import { Link } from 'react-router-dom'
import styled from 'styled-components'


const NavBtn = styled.div`
    text-decoration: none;
    width: ${props => props.style && props.style.width};
    height: ${props => props.style && props.style.height};
    background-color: ${props => props.style && props.style.backgroundColor};
    color: purple;
    display: grid;
    place-items: center;
    ${'' /* border: 1px solid #dcdcdc; */}
    border-radius: 25px;
    font-size: 14px;
    :hover{
        box-shadow: -2px 0px 15px rgb(0, 0, 0, .4);
        color: blue;
        transition: ease-in-out .2s;
    }
`

const DemoBtn = ({to, children, style}) => {
    console.log(to)
    return (
        <>
            <Link to={to} style={{textDecoration: 'none'}}>
                <NavBtn style={style}>
                    {children}
                </NavBtn>
            </Link>
        </>
    )
}

// const BtnA = ({toHref, children, style}) => {
//     return (
//         <>
//             <a href={toHref} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
//                 <NavBtn style={style}>
//                     {children}
//                 </NavBtn>                        
//             </a>
//         </>
//     )
// }


export {
    NavBtn,
}
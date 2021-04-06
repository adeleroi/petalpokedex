import styled from 'styled-components'


const NavBtn = styled.div`
    text-decoration: none;
    width: ${({style}) => style && style.width};
    height: ${({style}) => style && style.height};
    background-color: ${({style}) => style && style.backgroundColor};
    color: purple;
    display: grid;
    place-items: center;
    border-radius: 25px;
    font-size: 14px;
    :hover{
        box-shadow: -2px 0px 15px rgb(0, 0, 0, .4);
        color: blue;
        transition: ease-in-out .2s;
    }
`

export {
    NavBtn,
}
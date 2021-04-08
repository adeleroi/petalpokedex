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

const FullPageSpinner = () => {
    return (
        <div style={{height: '100vh', display: 'grid', placeItems: 'center'}}>
            <h2>
                <span 
                    className="icon-spinner9">
                </span>
                &nbsp; Loading
            </h2>
        </div>
    )
}

const Spinner = () => {
    return (
        <>
            <h2 style={{color: 'white'}}>
                <span 
                    className="icon-spinner9">
                </span>
                    &nbsp; Loading
            </h2>
        </>
    )
}

const DeleteInput = styled.button`
    background: gray;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    border: none;
    color: 'white';
    :hover&{
        background-Image: linear-gradient(to bottom right, #b13cff,#fd9d52);
        outline: none;
        cursor: pointer;
    }
    position: absolute;
    left: 97%;
    top: 12px;
    position: ${({style}) => style && style.position}
`

export {
    NavBtn,
    FullPageSpinner,
    Spinner,
    DeleteInput
}
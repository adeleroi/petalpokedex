import * as React from 'react'
import Tooltip from '@reach/tooltip'
import "@reach/tooltip/styles.css"
import {FaSearch} from 'react-icons/fa'
import styled from 'styled-components'
import { useContextMenu } from './searchcontext'


const Search = () => {
    const [inputValue, setInputValue] = React.useState("")
    const [, setIsOpen] = useContextMenu()
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputValue)
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
                style={{margin: '20px 10px', position: 'relative', width: '90%'}}
            >
                <InputSearch
                    type="search" placeholder="Rechercher" 
                    id="search"
                    type="search"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onClick={() => setIsOpen(true)}
                    autoComplete="off"
                />
                <Tooltip 
                    label="Recherche"
                    aria-label="Recherche">
                    <label htmlFor="search">
                        <button style={{
                            background: 'transparent',
                            border: 'none', position: 'absolute', left: '15px', top: '18px',
                            zIndex: '500',
                            color: 'gray', cursor: 'pointer'
                            
                            }}>
                            <FaSearch/>
                        </button>
                    </label>
                </Tooltip>
                {
                    inputValue && (
                        <DeleteInput onClick={() => setInputValue("")}>
                            <span style={{color: 'white', fontSize: '18px'}}>&times;</span>
                        </DeleteInput>
                    )
                }
            </form>
        </>
    )
}


const InputSearch = styled.input`
    width: 100%;
    height: 50px;
    border-radius: 25px;
    border: transparent;
    padding: 0 45px;
    background: #f1f2f7;
    font-size: 18px;
    font-weight: 500;
    outline: none;
    :hover& {
        background-color: #dcdcdc;
    }
    : focus& {
        border: 5px solid steelblue;
        height: 52px;
    }

`

const DeleteInput = styled.button`
    background: gray;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    border: none;
    color: 'white';
    :hover&{
        ${'' /* background-color: red; */}
        background-Image: linear-gradient(to bottom right, #b13cff,#fd9d52);
        outline: none;
        cursor: pointer;
    }
    position: absolute;
    left: 97%;
    top: 12px;
`

export default Search
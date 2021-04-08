import * as React from 'react'
import {useHistory} from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'
import styled from 'styled-components'
import {DeleteInput} from '../lib/index'

import {
    SearchProvider,
    SearchOpen,
    SearchFilter,
} from './searchcontext'


const Search = ({pokemonName, cStyle}) => {
    const [isValid, setIsValid] = React.useState(true)
    const [inputValue, setInputValue] = React.useState("")
    const history = useHistory()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputValue)
        let data = pokemonName.find(val => val === inputValue)
        if(data !== undefined){
            history.push(`/pokemon/${data.id}`)
            return
        }
        setIsValid(false)
    }

    return (
        <FormSearch onSubmit={handleSubmit} style={cStyle}>
                <SearchProvider>
                    <SearchOpen>
                        <InputSearch value={inputValue}
                         onChange={(e) => setInputValue(e.target.value)} />
                    </SearchOpen>
                    <SearchFilter value={inputValue} pokemonName={pokemonName} isValid={isValid}/>
                </SearchProvider>
                <label htmlFor="search">
                    <SearchButton>
                        <FaSearch/>
                    </SearchButton>
                </label>
                {
                    inputValue && (
                        <DeleteInput onClick={() => setInputValue("")}>
                            <span style={{color: 'white', fontSize: '18px'}}>&times;</span>
                        </DeleteInput>
                    )
                }
        </FormSearch>
    )
}


const FormSearch = styled.form(
    {
        position: 'absolute', width: '90%',
        left: '50%', transform: 'translateX(-50%)'
        
    }
)

const SearchButton = styled.button(
    {
        background: 'transparent',
        border: 'none', position: 'absolute', left: '15px', top: '18px',
        zIndex: '500',
        color: 'gray', cursor: 'pointer'
    }
)

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
export default Search
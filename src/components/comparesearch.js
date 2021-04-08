import * as React from 'react'
import {FaSearch} from 'react-icons/fa'
import styled from 'styled-components'
import {DeleteInput} from '../lib/index'

import {
    CompareProvider,
    CompareOpen,
    CompareFilter,
} from './comparecontext'


const Compare = ({pokemonName, handleComparison}) => {
    const [isValid, setIsValid] = React.useState(true)
    const [inputValue, setInputValue] = React.useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(inputValue)
        let data = pokemonName.find(val => val === inputValue)
        if(data !== undefined){
            return
        }
        setIsValid(false)
    }

    return (
        <FormCompare onSubmit={handleSubmit}>
                <CompareProvider>
                    <CompareOpen>
                        <InputCompare value={inputValue}
                         onChange={(e) => setInputValue(e.target.value)} />
                    </CompareOpen>
                    {/* <CompareFilter value={inputValue} pokemonName={pokemonName} isValid={isValid}/> */}
                    <CompareFilter value={inputValue}
                        pokemonName={pokemonName}
                        isValid={isValid}
                        handleComparison={handleComparison}
                    />
                </CompareProvider>
                <label htmlFor="compare">
                    <CompareButton>
                        <FaSearch/>
                    </CompareButton>
                </label>
                {
                    inputValue && (
                        <DeleteInput onClick={() => setInputValue("")} style={{left: '93%'}}>
                            <span style={{color: 'white', fontSize: '18px'}}>&times;</span>
                        </DeleteInput>
                    )
                }
        </FormCompare>
    )
}


const FormCompare = styled.form(
    {
        position: 'absolute', width: '50%',
        left: '50%', transform: 'translateX(-50%)',
        backgroundColor: 'transparent', borderRadius: '25px'
    }
)

const CompareButton = styled.button(
    {
        background: 'transparent',
        border: 'none', position: 'absolute', left: '15px', top: '18px',
        zIndex: '500',
        color: 'gray', cursor: 'pointer'
    }
)

const InputCompare = styled.input`
    width: 100%;
    height: 50px;
    border-radius: 25px;
    border: white;
    padding: 0 45px;
    background-color:'rgb(0, 0, 0, .7)';
    font-size: 18px;
    font-weight: 500;
    outline: none;
    :hover& {
        ${'' /* background-color: #dcdcdc; */}
        background-color: 'rgb(0, 0, 0, .7)'
    }
    :focus& {
        border: 5px solid black;
        height: 52px;
        color: black
    }

`
export default Compare
import * as React from 'react'
import styled from 'styled-components'


export const CompareMenu = ({value, disMiss, isOpen, pokemonName, isValid, handleComparison, ...rest}) => {
    console.log(value)
    const handleClick = async (id, val) => {
        handleComparison(id, val)
        disMiss()
    }
    
    
    let data = pokemonName && pokemonName.filter(({name}) => value && name.startsWith(value.trim().toLowerCase()))
    data = data.slice(0, 7)
    const customFilterPanelStyle = (!data.length && value) ? (
            {height: '120px'} // hauteur sans aucun resultat
            ) : (!value) ? (
            {height: '20vh'} //hauteur avec sections suggerees
            ) : (
            {height: '270px'} // hauteur avec pokemons suggerees
    )

    return (
        <>
        {isOpen && (
            <>
            <FilterPanel style={{...customFilterPanelStyle}}>
                <DissmissSearch onClick={() => disMiss()}>&times;</DissmissSearch>

            {
                !value? (
                    <>
                        {null}
                    </>
                ):  data.length ? (
                    data && data.map(({name, id}) => {
                        const val = value.trim().toLowerCase()
                        const len = val.length
                        const left = name.slice(0, len)
                        const right = name.slice(len)
                        return (
                                <FilterItem
                                    key={`${id}-${name}`}
                                    onClick={() => handleClick(id, name)}>
                                    <span style={{color: 'gray'}}>{left}</span>
                                    <span style={{fontWeight: '600'}}>{right}</span>
                                </FilterItem>
                        )
                    })
                ):(
                    <p style={{paddingLeft: '20px',
                        fontSize: '19px', marginTop: '7px'}}>
                        Aucun résultat ne correspond à votre recherche...
                    </p>
                )
            }
            </FilterPanel>
        </>
        )
        }
    </>
    )
}



const FilterItem = styled.div({
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
    fontFamily: 'ubuntu',
    marginBottom: '10px',
    paddingLeft: '20px',
    height: '25px',
    '&:hover':{backgroundColor: '#f1f2f7'},
    cursor: 'pointer'
})

const DissmissSearch = styled.div`
    display: grid;
    place-items: center;
    cursor: pointer;
    position: absolute;
    top: 5px;
    right: 5px;
    ${'' /* transform: translateX(-50%); */}
    font-size: 25px;
    height: 45px;
    width: 45px;
    border-radius: 50%;
    z-index: '80000000000';
    background-color: gray;
    color: white;
    :hover&{
        ${'' /* background-color: gray; */}
        background-Image: linear-gradient(to bottom right, #b13cff,#fd9d52);
    }

`

const FilterPanel = styled.div(props => (
    {
        height: '80vh', width: '100%', backgroundColor: 'white',
        position: 'relative', left: '50%', transform: 'translateX(-50%)',
        padding: '10px 0px',  zIndex: '3', top: '1px', borderRadius: '15px',
        border: '5px solid black'
    }
))




export default CompareMenu
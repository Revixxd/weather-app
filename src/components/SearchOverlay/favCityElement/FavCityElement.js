import React from 'react'

//styling
import { StyledFavCityElement } from './favCityElementstyling'

//functions
import { deleteElement } from '../../../functions/deleteElement'
import { cityUrl } from '../../../functions/url'

//icons
import { RiDeleteBin5Line } from '@react-icons/all-files/ri/RiDeleteBin5Line'
function FavCityElement(props) {
    function afterClick(event) {
        props.fetchData(cityUrl(event.target.innerText))
        props.changeSearchState()
    }
    return (
        <StyledFavCityElement>
            <h4 onClick={(event) => afterClick(event)}>{props.element}</h4>
            <button
                onClick={() =>
                    props.setFavCity(
                        deleteElement(props.favCity, props.element)
                    )
                }
            >
                <RiDeleteBin5Line color="white" />
            </button>
            {/* <button>Set to daefult</button> */}
        </StyledFavCityElement>
    )
}

export default FavCityElement

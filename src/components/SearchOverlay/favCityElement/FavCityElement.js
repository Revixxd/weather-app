import React from "react";

//styling
import { StyledFavCityElement } from "./favCityElementstyling";

//functions
import { deleteTask } from "../../../functions/deleteElement";
import { cityUrl } from "../../../functions/url";

//icons
import {AiOutlineClose} from "@react-icons/all-files/ai/AiOutlineClose"
function FavCityElement(props){
    function afterClick(event){
        props.setUrlState(cityUrl(event.target.innerText))
        props.changeSearchState()
    }
    return(
        <StyledFavCityElement>
            <h4
            onClick={(event) =>afterClick(event)}
            >{props.element}</h4>
            <button
            onClick={() => (props.setFavCity(deleteTask(props.favCity,props.element)))}
            ><AiOutlineClose color="white"/></button>
            {/* <button>Set to daefult</button> */}
        </StyledFavCityElement>
    )
}


export default FavCityElement
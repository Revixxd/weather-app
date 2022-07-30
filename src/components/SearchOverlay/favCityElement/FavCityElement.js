import React from "react";

//styling=
import { StyledFavCityElement } from "./favCityElementstyling";

//functions
import { deleteTask } from "../../../functions/deleteElement";
import { cityUrl } from "../../../functions/url";

function FavCityElement(props){
    function afterClick(event){
        props.setUrlState(cityUrl(event.target.innerText))
        props.changeSearchState()
    }
    return(
        <StyledFavCityElement>
            <h3
            onClick={(event) =>afterClick(event)}
            >{props.element}</h3>
            <button
            onClick={() => (props.setFavCity(deleteTask(props.favCity,props.element)))}
            >Usuń</button>
            {/* <button>Set to daefult</button> */}
        </StyledFavCityElement>
    )
}


export default FavCityElement
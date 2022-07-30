import React from "react";

//styling=
import { StyledFavCityElement } from "./favCityElementstyling";

//functions
import { deleteTask } from "../../../functions/deleteElement";

function FavCityElement(props){
    return(
        <StyledFavCityElement>
            <h3>{props.element}</h3>
            <button
            onClick={() => (props.setFavCity(deleteTask(props.favCity,props.element)))}
            >Usuń</button>
            {/* <button>Set to daefult</button> */}
        </StyledFavCityElement>
    )
}


export default FavCityElement
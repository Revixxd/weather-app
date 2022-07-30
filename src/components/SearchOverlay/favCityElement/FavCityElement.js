import React from "react";

//styling

import { StyledFavCityElement } from "./favCityElementstyling";

function FavCityElement(props){
    return(
        <StyledFavCityElement>
            <h3>{props.element}</h3>
        </StyledFavCityElement>
    )
}

export default FavCityElement
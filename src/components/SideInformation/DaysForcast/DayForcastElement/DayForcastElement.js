import React from "react";

import { DayForcastElementStyled} from "./dayForcastElementStyling";
import image from "../../../../resources/images/Clear.png"

import { calculateTemp } from "../../../../functions/calculateTemp";

function TodayHighlightsElement(props){
    return(
        <DayForcastElementStyled>
            <h4>Tomorrow</h4>
            {<div className="imgContainer">
                <img alt ="weather icon" src={image}></img>
            </div>}
            {props.infoElement.main !== undefined ? <div className="tempretureInfo">
                <h4>{calculateTemp(props.degreInfo,props.infoElement.main.temp)}°</h4>
                <h5>{calculateTemp(props.degreInfo,props.infoElement.main.temp_min)}°</h5>
            </div> : <h5>Loading</h5>}    
        </DayForcastElementStyled>
    )
}

export default TodayHighlightsElement
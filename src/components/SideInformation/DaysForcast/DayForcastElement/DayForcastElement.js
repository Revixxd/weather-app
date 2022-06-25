import React from "react";

import { DayForcastElementStyled} from "./dayForcastElementStyling";
import image from "../../../../resources/images/Clear.png"

function TodayHighlightsElement(props){
    return(
        <DayForcastElementStyled>
            <h4>Tomorrow</h4>
            {<div className="imgContainer">
                <img alt ="weather icon" src={image}></img>
            </div>}
            {props.infoElement.main !== undefined ? <div className="tempretureInfo">
                <h4>{Math.round(props.infoElement.main.temp - 270)}°</h4>
                <h5>{Math.round(props.infoElement.main.temp_min -270) }°</h5>
            </div> : <h5>Loading</h5>}    
        </DayForcastElementStyled>
    )
}

export default TodayHighlightsElement
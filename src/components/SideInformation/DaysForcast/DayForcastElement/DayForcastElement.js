import React from "react";

import { DayForcastElementStyled} from "./dayForcastElementStyling";
import image from "../../../../resources/images/Clear.png"

function TodayHighlightsElement(){
    return(
        <DayForcastElementStyled>
            <h4>Tomorrow</h4>
            <div className="imgContainer">
                <img alt ="weather icon" src={image}></img>
            </div>
            <div className="tempretureInfo">
                <h4>11°</h4>
                <h5>16°</h5>
            </div>    
        </DayForcastElementStyled>
    )
}

export default TodayHighlightsElement
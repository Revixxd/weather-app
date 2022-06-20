import React from "react";

import { TodayHighlightsElementStyled} from "./todayHighLightsElementStyling";
import image from "../../../../resources/images/Clear.png"

function TodayHighlightsElement(){
    return(
        <TodayHighlightsElementStyled>
            <h4>Element</h4>
            <img alt ="weather icon" src={image}></img>

        </TodayHighlightsElementStyled>
    )
}

export default TodayHighlightsElement
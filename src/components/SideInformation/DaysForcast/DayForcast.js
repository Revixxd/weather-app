import React from "react";

import TodayHighlightsElement from "./DayForcastElement/DayForcastElement";

import { DayForcastStyling } from "./dayForcastStyling";

function TodaysHighlights(props){
    const elementsOfForcast = props.daysForcast.map(element =>{
        return(
            <TodayHighlightsElement infoElement = {element}/>
        )
    })
    return(
        <DayForcastStyling>
            {props.daysForcast !== undefined ? elementsOfForcast : <h5>Loading</h5>}
        </DayForcastStyling>
    )
}

export default TodaysHighlights
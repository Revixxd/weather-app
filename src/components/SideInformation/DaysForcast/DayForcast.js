import React from "react";

import TodayHighlightsElement from "./DayForcastElement/DayForcastElement";

import { DayForcastStyling } from "./dayForcastStyling";

function TodaysHighlights(){
    return(
        <DayForcastStyling>
            <TodayHighlightsElement/>
            <TodayHighlightsElement/>
            <TodayHighlightsElement/>
            <TodayHighlightsElement/>
            <TodayHighlightsElement/>
        </DayForcastStyling>
    )
}

export default TodaysHighlights
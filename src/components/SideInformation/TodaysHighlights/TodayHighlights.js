import React from "react";

import TodayHighlightsElement from "./TodayHighlightsElement/TodayHighLightsElement";

import { TodayHighlightsStyled } from "./todayHighlightsStyling";

function TodaysHighlights(){
    return(
        <TodayHighlightsStyled>
            <TodayHighlightsElement/>
            <TodayHighlightsElement/>
            <TodayHighlightsElement/>
            <TodayHighlightsElement/>
            <TodayHighlightsElement/>
        </TodayHighlightsStyled>
    )
}

export default TodaysHighlights
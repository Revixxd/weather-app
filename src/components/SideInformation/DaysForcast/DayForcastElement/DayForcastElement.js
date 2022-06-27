import React from "react";

import { DayForcastElementStyled} from "./dayForcastElementStyling";
import image from "../../../../resources/images/Clear.png"

//functions
import { calculateTemp } from "../../../../functions/calculateTemp";
import { converDate } from "../../../../functions/converDate";
function TodayHighlightsElement(props){

    const unixTime = props.infoElement.dt;
    const date = new Date(unixTime*1000);

    const dayOfWeek = date.getDay()
    const dayOfMonth = date.getDate()
    const month = date.getMonth()


    return(
        <DayForcastElementStyled>
            <h4>{(`${converDate("day",dayOfWeek)}, ${dayOfMonth} ${converDate("month",month)}`)}</h4>
            {<div className="imgContainer">
                <img alt ="weather icon" src={image}></img>
            </div>}
            {props.infoElement.main !== undefined ? <div className="tempretureInfo">
                <h4>{calculateTemp(props.degreInfo,props.infoElement.main.temp)}°</h4>
                <h5>{calculateTemp(props.degreInfo,props.infoElement.main.feels_like)}°</h5>
            </div> : <h5>Loading</h5>}    
        </DayForcastElementStyled>
    )
}

export default TodayHighlightsElement
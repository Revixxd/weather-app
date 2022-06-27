import React from "react";

import { DayForcastElementStyled} from "./dayForcastElementStyling";
import image from "../../../../resources/images/Clear.png"

import { calculateTemp } from "../../../../functions/calculateTemp";

function TodayHighlightsElement(props){
    const unixTime = props.infoElement.dt;
    const date = new Date(unixTime*1000);

    const dayOfWeek = date.getDay()
    const dayOfMonth = date.getDate()
    const month = date.getMonth()

    console.log(dayOfMonth)

    return(
        <DayForcastElementStyled>
            <h4>{(`${dayOfWeek} ${dayOfMonth},${month}`)}</h4>
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
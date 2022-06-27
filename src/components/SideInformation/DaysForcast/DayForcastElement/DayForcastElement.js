import React from "react";

import { DayForcastElementStyled} from "./dayForcastElementStyling";

//functions
import { calculateTemp } from "../../../../functions/calculateTemp";
import {getPhotosUrl} from "../../../../functions/photosURL" 

import {converDate} from "../../../../functions/converDate";
function TodayHighlightsElement(props){
    //time and date
    const unixTime = props.infoElement.dt;
    const date = new Date(unixTime*1000);

    const dayOfWeek = date.getDay()
    const dayOfMonth = date.getDate()
    const month = date.getMonth()

    //weather photo 

    const [currentWeather, setCurrentWeather] = React.useState('Clear')

    React.useEffect(()=>{
        if(props.infoElement.weather !== undefined){
            setCurrentWeather(props.infoElement.weather[0].main)
        }
    }, [props.infoElement.weather])

    return(
        <DayForcastElementStyled>
            <h4>{(`${converDate("day",dayOfWeek)}, ${dayOfMonth} ${converDate("month",month)}`)}</h4>
            {<div className="imgContainer">
                <img alt ="weather icon" src={getPhotosUrl(currentWeather)}></img>
            </div>}
            {props.infoElement.main !== undefined ? <div className="tempretureInfo">
                <h4>{`${calculateTemp(props.degreInfo,props.infoElement.main.temp)}${props.degreInfo === "celcius" ? "℃":"°F"}`}</h4>
                <h5>{`${calculateTemp(props.degreInfo,props.infoElement.main.feels_like)}${props.degreInfo === "celcius" ? "℃":"°F"}`}</h5>
            </div> : <h5>Loading</h5>}    
        </DayForcastElementStyled>
    )
}

export default TodayHighlightsElement
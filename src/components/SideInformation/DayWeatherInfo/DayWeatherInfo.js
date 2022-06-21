import React from "react";

import {DayWeatherInfoStyled} from "./dayWeatherInfoStyling"

function DayWeatherInfo(){
    return(
        <DayWeatherInfoStyled>
            <h1>Today’s Hightlights </h1>
            <div className="weekTemperature--container">
                <div className="weekTemperature__container--element mainElement">
                    <h2>Wind Status</h2>
                    <h2>7mph</h2>
                </div>
                <div className="weekTemperature__container--element mainElement">
                    <h2>Wind Status</h2>
                    <h2>7mph</h2>
                </div>
                <div className="weekTemperature__container--element">
                    <h2>Visibility</h2>
                    <h2>6,4 miles</h2>
                </div>
                <div className="weekTemperature__container--element">
                    <h2>Visibility</h2>
                    <h2>6,4 miles</h2>
                </div>
            </div>
        </DayWeatherInfoStyled>
    )
}

export default DayWeatherInfo
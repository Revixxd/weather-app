import React from "react";

import {WeekTemperatureStyled} from "./weekTemperatureStyling"

function WeekTemperature(){
    return(
        <WeekTemperatureStyled>
            <h3>Today’s Hightlights </h3>
            <div className="weekTemperature--container">
                <div className="weekTemperature__container--element">
                    <h2>Wind Status</h2>
                    <h2>7mph</h2>
                </div>
                <div className="weekTemperature__container--element">
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
        </WeekTemperatureStyled>
    )
}

export default WeekTemperature
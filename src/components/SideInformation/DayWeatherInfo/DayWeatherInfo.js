import React from "react";

import {DayWeatherInfoStyled} from "./dayWeatherInfoStyling"

function DayWeatherInfo(){
    return(
        <DayWeatherInfoStyled>
            <h2>Today’s Hightlights </h2>
            <div className="weekTemperature--container">

                <div className="weekTemperature__container--element ">
                    <h4>Wind Status</h4>
                    <div className="weekTemperature__container__element--textContent">
                        <h2>7</h2>
                        <h4>mph</h4>
                    </div>
                </div>
                <div className="weekTemperature__container--element ">
                    <h4>Humidity</h4>
                    <div className="weekTemperature__container__element--textContent">
                        <h2>84</h2>
                        <h4>%</h4>
                    </div>
                </div>

                <div className="weekTemperature__container--element">
                    <h4>Visibility</h4>
                    <div className="weekTemperature__container__element--textContent">
                        <h2>6,4</h2>
                        <h4>miles</h4>
                    </div>
                </div>
                <div className="weekTemperature__container--element">
                    <h4>Air Pressure</h4>
                    <div className="weekTemperature__container__element--textContent">
                        <h2>998</h2>
                        <h4>mb</h4>
                    </div>
                </div>
            </div>
        </DayWeatherInfoStyled>
    )
}

export default DayWeatherInfo
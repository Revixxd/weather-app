import React from "react";

import {DayWeatherInfoStyled} from "./dayWeatherInfoStyling"

function DayWeatherInfo(props){
    return(
        <DayWeatherInfoStyled>
            <h2>Today’s Hightlights </h2>
            <div className="weekTemperature--container">

                {props.todayForcast.wind !== undefined ? <div className="weekTemperature__container--element ">
                    <h4>Wind Status</h4>
                    <div className="weekTemperature__container__element--textContent">
                        <h2>{props.todayForcast.wind.speed}</h2>
                        <h4>mph</h4>
                    </div>
                </div> : <h5>loading</h5>}

                {props.todayForcast.main !== undefined ? <div className="weekTemperature__container--element ">
                    <h4>Humidity</h4>
                    <div className="weekTemperature__container__element--textContent">
                        <h2>{props.todayForcast.main.humidity}</h2>
                        <h4>%</h4>
                    </div>
                </div> : <h5>loading</h5>}

                {props.todayForcast.visibility !== undefined ? <div className="weekTemperature__container--element ">
                    <h4>Visibility</h4>
                    <div className="weekTemperature__container__element--textContent">
                        <h2>{props.todayForcast.visibility}</h2>
                        <h4></h4>
                    </div>
                </div> : <h5>loading</h5>}

                {props.todayForcast.main !== undefined ? <div className="weekTemperature__container--element ">
                    <h4>Air Pressure</h4>
                    <div className="weekTemperature__container__element--textContent">
                        <h2>{props.todayForcast.main.pressure}</h2>
                        <h4>mb</h4>
                    </div>
                </div> : <h5>loading</h5>}

            </div>
        </DayWeatherInfoStyled>
    )
}

export default DayWeatherInfo
import React from "react";

import {DayWeatherInfoStyled} from "./dayWeatherInfoStyling"

function DayWeatherInfo(props){
    return(
        <DayWeatherInfoStyled>
            <h3>Today’s Hightlights </h3>
            <div className="weekTemperature--container">

                {props.todayForcast.wind !== undefined ? <div className="weekTemperature__container--element weekTemperature__container__element--upperElement ">
                    <h4>Wind Status</h4>
                    <div className="weekTemperature__container__element--textContent">
                        <h2>{props.todayForcast.wind.speed}</h2>
                        <h4>mph</h4>
                    </div>
                </div> : <h5>loading</h5>}

                {props.todayForcast.main !== undefined ? <div className="weekTemperature__container--element weekTemperature__container__element--upperElement">
                    <h4>Humidity</h4>
                    <div className="weekTemperature__container__element--textContent">
                        <h2>{props.todayForcast.main.humidity}</h2>
                        <h4>%</h4>
                    </div>
                    <div className="weekTemperature__container__element--progresDiv">
                        <div className="weekTemperature__container__element__progresDiv--legend">
                            <h6>0%</h6>
                            <h6>50%</h6>
                            <h6>100%</h6>
                        </div>
                        <progress value={props.todayForcast.main.humidity} max="100"></progress>
                    </div>
                </div> : <h5>loading</h5>}

                {props.todayForcast.visibility !== undefined ? <div className="weekTemperature__container--element ">
                    <h4>Visibility</h4>
                    <div className="weekTemperature__container__element--textContent">
                        <h2>{props.todayForcast.visibility}</h2>
                        {/* <h4></h4> */}
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
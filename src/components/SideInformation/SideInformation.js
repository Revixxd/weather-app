import React from "react"

import DayWeatherInfo from "./DayWeatherInfo/DayWeatherInfo"
import TodaysHighlights from "./DaysForcast/DayForcast"

import { SideInformationStyled } from "./sideInformationStyling"

function SideInformation(props){

    

    function setCelciousDegree(){
        if(props.degreInfo !== "celcius"){
            props.setDegreInfo("celcius")
        }
    }
    function setFahrenheitDegree(){
        if(props.degreInfo !== "fahrenheit"){
            props.setDegreInfo("fahrenheit")
        }
    
    }


    return(
        <SideInformationStyled>
            <div className="SideInformationStyled--container">

                <div className="SideInformationStyled__container--temperatureChooseDiv">
                    <button onClick={setCelciousDegree} className = {props.degreInfo === "celcius" ? 'buttonSelected':''}>C°</button>
                    <button onClick={setFahrenheitDegree} className = {props.degreInfo === "fahrenheit" ? 'buttonSelected':''}>F°</button>
                </div>
                <TodaysHighlights degreInfo = {props.degreInfo} daysForcast = {props.daysForcast}/>
                <DayWeatherInfo todayForcast = {props.todayForcast}/>
                <footer>
                    <span> <a href="https://github.com/Revixxd" rel="noreferrer" target="_blank" class="profileName">Created by 
                    <u> Revixxd</u></a></span> <span><a href="https://devchallenges.io"
                target="_blank" rel="noreferrer">devChallenges.io</a></span>
                </footer>

            </div>
        </SideInformationStyled>
    )
}

export default SideInformation
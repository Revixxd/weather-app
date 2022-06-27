import React from "react"

import DayWeatherInfo from "./DayWeatherInfo/DayWeatherInfo"
import TodaysHighlights from "./DaysForcast/DayForcast"

import { SideInformationStyled } from "./sideInformationStyling"

function SideInformation(props){

    const [degreInfo, setDegreInfo] = React.useState("celcius")

    function setCelciousDegree(){
        if(degreInfo !== "celcius"){
            setDegreInfo("celcius")
            console.log("celcius")
        }
    }
    function setFahrenheitDegree(){
        if(degreInfo !== "fahrenheit"){
            setDegreInfo("fahrenheit")
            console.log("fahrenheit")
        }
    
    }


    return(
        <SideInformationStyled>
            <div className="SideInformationStyled--container">

                <div className="SideInformationStyled__container--temperatureChooseDiv">
                    <button onClick={setCelciousDegree} className = {degreInfo === "celcius" ? 'buttonSelected':''}>C°</button>
                    <button onClick={setFahrenheitDegree} className = {degreInfo === "fahrenheit" ? 'buttonSelected':''}>F°</button>
                </div>
                <TodaysHighlights daysForcast = {props.daysForcast}/>
                <DayWeatherInfo todayForcast = {props.todayForcast}/>
                <footer>
                    <span> <a href="https://github.com/Revixxd" rel="noreferrer" target="_blank" class="profileName">Created by 
                    <u> Revixxd</u></a></span> - <span><a href="https://devchallenges.io"
                target="_blank" rel="noreferrer">devChallenges.io</a></span>
                </footer>

            </div>
        </SideInformationStyled>
    )
}

export default SideInformation
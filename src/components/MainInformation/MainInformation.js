import React from "react"

import SearchOverlay from "../SearchOverlay/SearchOverlay"

import {calculateTemp} from "../../functions/calculateTemp";

import { MainInformationStyled } from "./mainIformationStyling"
import {BiCurrentLocation} from "@react-icons/all-files/bi/BiCurrentLocation"

import weather from '../../resources/images/Snow.png'
function MainInformation(props){
    const deafulComponentState = false
    const [isSearchComponent,setIsSearchComponent] = React.useState(deafulComponentState)

    function changeSearchState(){
        setIsSearchComponent(prevState => !prevState)
    }

    const currentTime = new Date();
    const currentDay = currentTime.getDate()
    const currentDayName = currentTime.getDay()
    const currentMonth = currentTime.getMonth()


    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    const dayNames = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
    ];


    return(
        <MainInformationStyled>
            {isSearchComponent && <SearchOverlay 
            changeCity = {props.changeCity} 
            searchCity = {props.searchCity} 
            errorSearch = {props.errorSearch} 
            handleClick = {changeSearchState}/>}
            <div className="container">
                <div className="container--locationInputDiv">
                    <button onClick={changeSearchState}>Search for places</button>
                    <button className="container__locationInputDiv--roundedButton"><BiCurrentLocation/></button>
                </div>
                <div className="container--imageContainer">
                    <img alt="weatherImage" src={weather}></img>
                </div>

                <div className="container--information">
                    <div className="container__information--temperaturediv">
                        {props.todayForcast.main === undefined ? <h6>ISLOADING</h6> : <h1>{calculateTemp(props.degreInfo, props.todayForcast.main.temp)}</h1>}
                        <h3>℃</h3>
                    </div>
                    {props.todayForcast.weather === undefined ? <h3>ISLOADING</h3> : <h3>{props.todayForcast.weather[0].main}</h3>}
                </div>

                <div className="container--footer">

                    <div className="container__footer--dateDiv">
                        <h6>Today</h6>
                        <h6> {`${dayNames[currentDayName]}, ${currentDay} ${monthNames[currentMonth]}`}</h6>

                    </div>
                    <div>
                    {props.cityInfo === undefined ? <h6>ISLOADING</h6> : <h6>{`${props.cityInfo.name}, ${props.cityInfo.country}`}</h6>}
                    </div>
                </div>
            </div>
        </MainInformationStyled>
    )
}

export default MainInformation
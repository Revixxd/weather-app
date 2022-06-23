import React from "react"

import SearchOverlay from "../SearchOverlay/SearchOverlay"

import { MainInformationStyled } from "./mainIformationStyling"
import {BiCurrentLocation} from "@react-icons/all-files/bi/BiCurrentLocation"

import weather from '../../resources/images/Snow.png'
function MainInformation(props){

    const deafulComponentState = false
    const [isSearchComponent,setIsSearchComponent] = React.useState(deafulComponentState)

    function changeSearchState(){
        setIsSearchComponent(prevState => !prevState)
    }

    return(
        <MainInformationStyled>
            {isSearchComponent && <SearchOverlay handleClick = {changeSearchState}/>}
            <div className="container">
                <div className="container--locationInputDiv">
                    <button onClick={changeSearchState}>Search for places</button>
                    <button className="container__locationInputDiv--roundedButton"><BiCurrentLocation/></button>
                </div>
                <div className="container--imageContainer">
                    <img src={weather}></img>
                </div>

                <div className="container--information">
                    <div className="container__information--temperaturediv">
                        <h1>15</h1>
                        <h3>℃</h3>
                    </div>
                    <h3>Shower</h3>
                </div>

                <div className="container--footer">

                    <div className="container__footer--dateDiv">
                        <h6>Today</h6>
                        <span>&#183;</span>
                        <h6>Fri, 5 Jun</h6>

                    </div>
                    <h6>Helsinki</h6>
                </div>
            </div>
        </MainInformationStyled>
    )
}

export default MainInformation
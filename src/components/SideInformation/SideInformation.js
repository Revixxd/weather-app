import DayWeatherInfo from "./DayWeatherInfo/DayWeatherInfo"
import TodaysHighlights from "./DaysForcast/DayForcast"

import { SideInformationStyled } from "./sideInformationStyling"
function SideInformation(){
    return(
        <SideInformationStyled>
            <div className="SideInformationStyled--container">

                <div className="SideInformationStyled__container--temperatureChooseDiv">
                    <button>C°</button>
                    <button>F°</button>
                </div>
                <TodaysHighlights/>
                <DayWeatherInfo/>
                {/* <footer></footer> */}

            </div>
        </SideInformationStyled>
    )
}

export default SideInformation
import WeekTemperature from "./WeekTemperature/WeekTemperature"
import TodaysHighlights from "./TodaysHighlights/TodayHighlights"

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
                <WeekTemperature/>
                {/* <footer></footer> */}

            </div>
        </SideInformationStyled>
    )
}

export default SideInformation
import { MainInformationStyled } from "./mainIformationStyling"
function MainInformation(){
    return(
        <MainInformationStyled>
            <div className="container">
                <div className="container--locationInputDiv">
                    <button>Search for places</button>
                    <button>Location</button>
                </div>
                <div className="container--imageContainer">
                    <img src="https://picsum.photos/20/30"></img>
                </div>

                <div className="container--information">
                    <h1>15</h1>
                    <h3>Shower</h3>
                </div>

                <div className="container--element">

                    <div className="container--element--dateDiv">
                        <h6>Today</h6>
                        <h6>Fri, 5 Jun</h6>

                    </div>
                    <h6>Helsinki</h6>
                </div>
            </div>
        </MainInformationStyled>
    )
}

export default MainInformation
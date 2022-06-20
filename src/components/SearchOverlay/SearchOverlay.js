import React from "react";

import { StyledSearchOverlay } from "./searchOverlayStyling";

function SearchOverlay(){
    return(
        <StyledSearchOverlay>
            <button>Exit</button>
            <div className="StyledSearchOverlay--container">
                <div className="StyledSearchOverlay__container--searchDiv">
                    <form>
                        <input placeHolder="search location"></input>
                        <button>Search</button>
                    </form>
                </div>
            </div>
        </StyledSearchOverlay>
    )
}

export default SearchOverlay
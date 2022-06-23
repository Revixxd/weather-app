import React from "react";


import { StyledSearchOverlay } from "./searchOverlayStyling";

function SearchOverlay(props){
    return(
        <StyledSearchOverlay>
            <button onClick={props.handleClick}>Exit</button>
            <div className="styledSearchOverlay--formDiv">
                <form>
                    <input className="form-inputElement" placeHolder="search location"></input>
                    <button className="form-buttonElement">Search</button>
                </form>

            </div>
        </StyledSearchOverlay>
    )
}

export default SearchOverlay
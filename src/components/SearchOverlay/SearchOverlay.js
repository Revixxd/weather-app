import React from "react";

import { StyledSearchOverlay } from "./searchOverlayStyling";

function SearchOverlay(props){ 
    const [tempSearch, setCurrentSearch] = React.useState('')
    const handleClick = event => {
        props.changeCity(tempSearch)

        event.preventDefault();
        //to turn off layout
        props.handleClick()
    };

    return(
        <StyledSearchOverlay>
            <div className="styledSearchOverlay--formDiv">
                <form onSubmit = {handleClick}>
                    <input 
                        className="form-inputElement" 
                        placeholder="search location"
                        type="text"
                        value={tempSearch}
                        onChange={event => setCurrentSearch(event.target.value)}
                    />
                    <button 
                        className="form-buttonElement"
                        type="submit"
                        onClick={handleClick}
                    >search</button>
                </form>

            </div>
        </StyledSearchOverlay>
    )
}

export default SearchOverlay
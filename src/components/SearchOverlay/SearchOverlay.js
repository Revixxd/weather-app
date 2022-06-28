import React from "react";

import { StyledSearchOverlay } from "./searchOverlayStyling";

import { cityUrl } from "../../functions/url";

function SearchOverlay(props){
    console.log(props.errorSearch)

    const [tempSearch, setCurrentSearch] = React.useState('')
    const handleClick = event => {
        props.changeCity(tempSearch)
        event.preventDefault();
        props.handleClick()
        props.setUrlState(cityUrl(tempSearch))
    };

    return(
        <StyledSearchOverlay>
            <div className="styledSearchOverlay--formDiv">
                <form onSubmit = {handleClick}>
                    <input 
                        // className= {`form-inputElement ${props.errorSearch ? "test":""}`} 
                        className= {`form-inputElement ${props.errorSearch ? "test":""}`} 
                        placeholder="Search location"
                        type="text"
                        value={tempSearch}
                        onChange={event => (setCurrentSearch(event.target.value))}
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
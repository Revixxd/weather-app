import React from "react";

import { StyledSearchOverlay } from "./searchOverlayStyling";

import { cityUrl } from "../../functions/url";

function SearchOverlay(props){
    const [tempSearch, setCurrentSearch] = React.useState('')
    const handleClick = event => {
        props.changeCity(tempSearch)
        event.preventDefault();
        props.handleClick()
        props.setUrlState(cityUrl(tempSearch))
    };

    //changing set to temp array to map over map function
    let tempArray = Array.from(props.favCity)
    const favCityElements = tempArray.map(element =>{
        console.log(element)
        return(
            //make this component where element cna be deleted from set and maybe set to deafult ??
            <h3>{element}</h3>
        )
    })

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
                <div className="styledSearchOverlay--favCityContainer">
                    {favCityElements}
                </div>
        </StyledSearchOverlay>
    )
}

export default SearchOverlay
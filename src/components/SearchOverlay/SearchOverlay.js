import React from "react";

//styling
import { StyledSearchOverlay } from "./searchOverlayStyling";
//funcions
import { cityUrl } from "../../functions/url";
//components
import FavCityElement from "./favCityElement/FavCityElement";

function SearchOverlay(props){
    const [tempSearch, setCurrentSearch] = React.useState('')
    const handleClick = event => {
        props.changeCity(tempSearch)
        event.preventDefault();
        props.changeSearchState()
        props.setUrlState(cityUrl(tempSearch))
    };

    //changing set to temp array to map over map function
    let tempArray = Array.from(props.favCity)
    const favCityElements = tempArray.map((element, key) =>{
        return(
            <FavCityElement
            key={key}
            element = {element}
            changeSearchState = {props.changeSearchState}
            setUrlState = {props.setUrlState}
            favCity = {props.favCity}
            setFavCity = {props.setFavCity}
            changeCity = {props.changeCity}
            />
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
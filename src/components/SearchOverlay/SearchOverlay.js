import React from 'react'

//styling
import { StyledSearchOverlay } from './searchOverlayStyling'
//funcions
import { cityUrl } from '../../functions/url'
//components
import FavCityElement from './favCityElement/FavCityElement'
//icons
import { AiOutlineClose } from '@react-icons/all-files/ai/AiOutlineClose'

function SearchOverlay(props) {
    const [tempSearch, setCurrentSearch] = React.useState('')

    function onSubmit(event) {
        props.changeCity(tempSearch)
        event.preventDefault()
        props.setUrlState(cityUrl(tempSearch))
    }

    //if error search will be change outside of component, component will be turn off
    React.useEffect(() => {
        if (props.isSearchComponent === true) {
            if (props.errorSearch === false) {
                props.changeSearchState()
            }
        }
    }, [props.errorSearch])

    const tempArray = Array.from(props.favCity)
    const favCityElements = tempArray.map((element, key) => {
        return (
            <FavCityElement
                key={key}
                element={element}
                changeSearchState={props.changeSearchState}
                setUrlState={props.setUrlState}
                favCity={props.favCity}
                setFavCity={props.setFavCity}
                changeCity={props.changeCity}
            />
        )
    })

    return (
        <StyledSearchOverlay>
            <div className="styledSearchOverlay--container">
                <div className="styledSearchOverlay--exitComponentDiv">
                    <AiOutlineClose
                        color="white"
                        fontSize="25px"
                        onClick={props.changeSearchState}
                    />
                </div>
                <div className="styledSearchOverlay--formDiv">
                    <form onSubmit={(event) => onSubmit(event)}>
                        <input
                            className={
                                props.errorSearch
                                    ? `${'form-buttonElement-error'}`
                                    : `${''}`
                            }
                            placeholder="Search location"
                            type="text"
                            value={tempSearch}
                            onChange={(event) =>
                                setCurrentSearch(event.target.value)
                            }
                        />
                        <input
                            className="form-buttonElement"
                            type="submit"
                            value="Search"
                        />
                    </form>
                </div>
                <div className="styledSearchOverlay--favCityContainer">
                    {favCityElements}
                </div>
            </div>
        </StyledSearchOverlay>
    )
}

export default SearchOverlay

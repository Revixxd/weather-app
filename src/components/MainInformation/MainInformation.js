import React from 'react'

import SearchOverlay from '../SearchOverlay/SearchOverlay'

//functions
import { deleteElement } from '../../functions/deleteElement'
import { calculateTemp } from '../../functions/calculateTemp'
import { converDate } from '../../functions/converDate'
import { getPhotosUrl } from '../../functions/photosURL'

import { MainInformationStyled } from './mainIformationStyling'
import { BiCurrentLocation } from '@react-icons/all-files/bi/BiCurrentLocation'
import { AiOutlineHeart } from '@react-icons/all-files/ai/AiOutlineHeart'
import { AiFillHeart } from '@react-icons/all-files/ai/AiFillHeart'

function MainInformation(props) {
    //searchComponent
    const [isSearchComponent, setIsSearchComponent] = React.useState(false)

    function changeSearchState() {
        setIsSearchComponent((prevState) => !prevState)
    }

    //dates
    const currentTime = new Date()
    const currentDayWeek = currentTime.getDay()
    const currentDayMonth = currentTime.getDate()
    const currentMonth = currentTime.getMonth()

    //for weather Photo
    const [currentWeather, setCurrentWeather] = React.useState('Clear')

    React.useEffect(() => {
        if (props.todayForcast.weather !== undefined) {
            setCurrentWeather(props.todayForcast.weather[0].main)
        }
    }, [props.todayForcast.weather])

    const [favCity, setFavCity] = React.useState([])

    React.useEffect(() => {
        if (localStorage.getItem('localfavCity') === '') {
            return
        } else {
            let tempArray = JSON.parse(localStorage.getItem('localfavCity'))
            setFavCity(new Set(tempArray))
        }
    }, [])

    //add to fav button
    let tempArray = Array.from(favCity)

    function addToFav(city) {
        setFavCity((oldArray) => new Set([...oldArray, city]))
        setFavButtonState((oldState) => !oldState)

        //visual effect for icon
        if (favButtonState === true) {
            console.log('test')
            deleteElement(favCity, props.cityInfo.city)
            setFavButtonState(false)
        }
    }
    if (tempArray.length !== 0) {
        localStorage.setItem('localfavCity', JSON.stringify(tempArray))
    }
    //viusal fav button
    const [favButtonState, setFavButtonState] = React.useState(false)
    React.useEffect(() => {
        if (props.cityInfo !== undefined) {
            if (tempArray.find((element) => element === props.cityInfo.name)) {
                setFavButtonState(true)
            } else {
                setFavButtonState(false)
            }
        }
    }, [tempArray])

    return (
        <MainInformationStyled>
            {isSearchComponent && (
                <SearchOverlay
                    setFavCity={setFavCity}
                    favCity={favCity}
                    changeCity={props.changeCity}
                    searchCity={props.searchCity}
                    errorSearch={props.errorSearch}
                    changeSearchState={changeSearchState}
                    setUrlState={props.setUrlState}
                />
            )}
            <div className="container">
                <div className="container--locationInputDiv">
                    <button onClick={changeSearchState}>
                        Search for places
                    </button>
                    <div className="container__locationInputDiv--sideDiv">
                        <button
                            className="container__locationInputDiv--roundedButton"
                            onClick={() => props.getCoords()}
                        >
                            <BiCurrentLocation />
                        </button>
                        <button
                            className="container__locationInputDiv--roundedButton"
                            onClick={() => addToFav(props.cityInfo.name)}
                        >
                            {favButtonState ? (
                                <AiFillHeart />
                            ) : (
                                <AiOutlineHeart />
                            )}
                        </button>
                    </div>
                </div>
                <div className="container--imageContainer">
                    <img
                        alt="weatherImage"
                        src={getPhotosUrl(currentWeather)}
                    ></img>
                </div>

                <div className="container--information">
                    <div className="container__information--temperaturediv">
                        {props.todayForcast.main === undefined ? (
                            <h6>ISLOADING</h6>
                        ) : (
                            <h1>
                                {calculateTemp(
                                    props.degreInfo,
                                    props.todayForcast.main.temp
                                )}
                            </h1>
                        )}
                        <h3>{props.degreInfo === 'celcius' ? '℃' : '°F'} </h3>
                    </div>
                    {props.todayForcast.weather === undefined ? (
                        <h3>ISLOADING</h3>
                    ) : (
                        <h3>{props.todayForcast.weather[0].main}</h3>
                    )}
                </div>

                <div className="container--footer">
                    <div className="container__footer--dateDiv">
                        <h6>Today</h6>
                        <h6>{`${converDate(
                            'day',
                            currentDayWeek
                        )}, ${currentDayMonth} ${converDate(
                            'month',
                            currentMonth
                        )}`}</h6>
                    </div>
                    <div>
                        {props.cityInfo === undefined ? (
                            <h6>ISLOADING</h6>
                        ) : (
                            <h6>{`${props.cityInfo.name}, ${props.cityInfo.country}`}</h6>
                        )}
                    </div>
                </div>
            </div>
        </MainInformationStyled>
    )
}

export default MainInformation

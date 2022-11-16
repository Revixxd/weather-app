import React from 'react'

//global styles
import { GlobalStyles } from './components/styling/globalStyles'
import { StyledApp } from './appstyling'
//themes
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './components/styling/themes'
//components
import SideInformation from './components/SideInformation/SideInformation'
import MainInformation from './components/MainInformation/MainInformation'

//function
import { getForcastDays } from './functions/getForcastDays'
import { getCurrentLocation } from './functions/getCurrentLocation'

//data for location
import { cityUrl, coordUrl } from './functions/url'

function App() {
    //darkMode functions
    const [theme, setTheme] = React.useState('dark')

    function changeTheme() {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    //could be stored in one useMemo onbject
    const [data, setData] = React.useState({})
    const [cityInfo, setCityInfo] = React.useState()
    const [daysForcast, setDaysForcast] = React.useState([])
    const [todayForcast, setTodayForcast] = React.useState({})

    //state which keep curent city, deafult set to "Warsaw"
    const [searchCity, setSearchCity] = React.useState('warsaw')

    //temperature definition
    const [degreInfo, setDegreInfo] = React.useState('celcius')

    //update data, cityinfo, datsForcast and today <- could be replace with useMemo to be updated each time if one of this is changed
    React.useEffect(() => {
        setCityInfo(data.city)
        if (data.list !== undefined) {
            setTodayForcast(data.list[0])
            setDaysForcast(getForcastDays(data.list, todayForcast))
        }
    }, [data, todayForcast])

    //functiopn to call current coord and with given coords set request to api and set to current location
    async function getCoords() {
        await getCurrentLocation()
        const cords = JSON.parse(localStorage.getItem('currentLocation'))
        fetchData(coordUrl(cords))
    }

    //error state need to decler if city is found or not
    const [errorSearch, setErrorSearch] = React.useState(false)
    function fetchData(url) {
        return new Promise((resolve) =>
            fetch(url)
                .then((response) => response.json())
                .then((response) => {
                    if (response.cod === '200') {
                        resolve(setData(response))
                        setErrorSearch(false)
                    } else {
                        console.log(`ERROR: ${response.cod}`)
                        setErrorSearch(true)
                    }
                })
        )
    }

    React.useEffect((searchCity) => {
        // //option when user agree to share location and it's saved
        // // but is should be user location be saved in local storage ???
        // if (localStorage.getItem('currentLocation') !== null) {
        //     fetchData(coordUrl(cords))
        fetchData(cityUrl(searchCity))
    }, [])

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />
            <StyledApp>
                {cityInfo && (
                    <MainInformation
                        fetchData={fetchData}
                        searchCity={searchCity}
                        changeCity={setSearchCity}
                        cityInfo={cityInfo}
                        todayForcast={todayForcast}
                        errorSearch={errorSearch}
                        degreInfo={degreInfo}
                        getCoords={getCoords}
                    />
                )}
                <SideInformation
                    degreInfo={degreInfo}
                    setDegreInfo={setDegreInfo}
                    todayForcast={todayForcast}
                    daysForcast={daysForcast}
                />
            </StyledApp>
        </ThemeProvider>
    )
}

export default App

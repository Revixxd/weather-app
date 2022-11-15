import React from 'react'
import axios from 'axios'

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

    const [data, setData] = React.useState({})
    const [cityInfo, setCityInfo] = React.useState()
    const [daysForcast, setDaysForcast] = React.useState([])
    const [todayForcast, setTodayForcast] = React.useState({})

    const [searchCity, setSearchCity] = React.useState('warsaw')

    const [urlState, setUrlState] = React.useState()

    const [errorSearch, setErrorSearch] = React.useState(false)

    React.useEffect(() => {
        setCityInfo(data.city)
        if (data.list !== undefined) {
            setTodayForcast(data.list[0])
            setDaysForcast(getForcastDays(data.list, todayForcast))
        }
    }, [data, todayForcast])

    //temperature definition
    const [degreInfo, setDegreInfo] = React.useState('celcius')

    async function getCoords() {
        const cords = JSON.parse(localStorage.getItem('currentLocation'))
        await getCurrentLocation()
        fetchData(coordUrl(cords))
    }

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

    React.useEffect(() => {
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
                        setUrlState={setUrlState}
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

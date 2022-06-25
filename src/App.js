import React from "react";

//global styles
import { GlobalStyles } from "./components/styling/globalStyles";
import { StyledApp } from "./appstyling";
//themes
import { ThemeProvider } from "styled-components";
import {lightTheme, darkTheme} from "./components/styling/themes"
//components
import SideInformation from "./components/SideInformation/SideInformation";

import MainInformation from "./components/MainInformation/MainInformation"

import axios from "axios"
function App() {

  //darkMode functions 
  const[theme, setTheme] = React.useState("dark")
  
  function changeTheme(){
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  const [data, setData] = React.useState({})
  const [cityInfo, setCityInfo] = React.useState({})
  const [daysForcast, setDaysForcast] = React.useState([])
  const [todayForcast, setTodayForcast] = React.useState({})

  const [searchCity, setSearchCity] = React.useState("warszawa")

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&appid=410e713617c25eb9e018ecafd290e053`


  React.useEffect(()=>{
    axios.get(url).then((response) => {
      setData(response.data)
    })
  }, [url])


  React.useEffect(()=>{
    setCityInfo(data.city)
    if(data.list !== undefined){
      setDaysForcast(data.list.slice(0, 5))
      setTodayForcast(data.list[0])
    }
    // setSearchCity('')
  }, [data])


  
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <StyledApp>
          {/* dodac tylko ze pierwszy element list zostanie przeslany do mainInformation */}
          <MainInformation searchCity = {searchCity} changeCity = {setSearchCity} cityInfo = {cityInfo} todayForcast = {todayForcast}/>
          <SideInformation todayForcast = {todayForcast} daysForcast={daysForcast}/>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;

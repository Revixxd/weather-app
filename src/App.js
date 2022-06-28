import React from "react";
import axios from 'axios';

//global styles
import { GlobalStyles } from "./components/styling/globalStyles";
import { StyledApp } from "./appstyling";
//themes
import { ThemeProvider } from "styled-components";
import {lightTheme, darkTheme} from "./components/styling/themes"
//components
import SideInformation from "./components/SideInformation/SideInformation";
import MainInformation from "./components/MainInformation/MainInformation"

//function
import { getForcastDays } from "./functions/getForcastDays";

//data
import { cityUrl, coordUrl } from "./functions/url";

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

  const [searchCity, setSearchCity] = React.useState("warsaw")
  
  const [urlState, setUrlState] = React.useState(cityUrl)
  console.log(urlState)
  
  const [errorSearch, setErrorSearch] = React.useState(false)
  React.useEffect(()=>{
    axios
    .get(urlState)
    .then((response) => {
      setData(response.data)
    })
    .catch(err => {
      if (err.response) {
        // console.log(err.response.status);
        if(err.response.status === 404){
          console.log("ERROR")
          setErrorSearch(true)
        }else{
          setErrorSearch(false)
          
        }
        // console.log(err.response.statusText);
        // console.log(err.message);
        // console.log(err.response.headers); 
        // console.log(err.response.data); 
      }
    })
  }, [urlState])

  React.useEffect(()=>{
    setCityInfo(data.city)
    if(data.list !== undefined){
      setTodayForcast(data.list[0])
      setDaysForcast(getForcastDays(data.list, todayForcast))
    }
    // setSearchCity('')
  }, [data, todayForcast])

  
  
  
  //temperature change set
  const [degreInfo, setDegreInfo] = React.useState("celcius")
  
  //location 
  const [coord, setCoord] =React.useState([])
    

  React.useEffect(()=>{
    // console.log(coord)
    if(coord.length !== 0 ){
      setUrlState("cord")
    }
  },[coord])
  
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <StyledApp>
          <MainInformation 
          searchCity = {searchCity} 
          changeCity = {setSearchCity} 
          cityInfo = {cityInfo} 
          todayForcast = {todayForcast}
          errorSearch = {errorSearch}
          degreInfo = {degreInfo}
          
          setCoord = {setCoord}
          setUrlState = {setUrlState}
          />
          <SideInformation 
          degreInfo = {degreInfo}
          setDegreInfo = {setDegreInfo}
          todayForcast = {todayForcast} 
          daysForcast={daysForcast}
          />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;

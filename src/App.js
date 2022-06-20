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


function App() {

  //darkMode functions 
  const[theme, setTheme] = React.useState("dark")
  function changeTheme(){
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  const [data, setData] = React.useState([])
  // const [weekData, setWeekData] = React.useState([])
  console.log(data)
  // const weekData = Arraydata.list.slice(1,0)
  // console.log(weekData)
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3ea321f13fmshe7a8d9c4e583f0ep120a55jsnd33338b170c7',
      'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
    }
  };
  
  React.useEffect(()=>{
    fetch('https://community-open-weather-map.p.rapidapi.com/climate/month?q=brzeg%20dolny', options)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(err => console.error(err));
  }, [])

  // console.log(data)
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <StyledApp>
          {/* dodac tylko ze pierwszy element list zostanie przeslany do mainInformation */}
          <MainInformation cityInformation = {data.city} todayTemp = {data.list}/>
          <SideInformation/>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;

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

import SearchLocation from "./components/SearchLocation/SearchLocation"

function App() {

  //darkMode functions 
  const[theme, setTheme] = React.useState("dark")
  function changeTheme(){
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  const[isSearchComponent,setIsSearchComponent] = React.useState(false)

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <StyledApp>
          {/* <SearchLocation /> */}
          <MainInformation/>
          <SideInformation/>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;

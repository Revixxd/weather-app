import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        text-decoration: none;
    }
    body{
        font-family: 'Montserrat', sans-serif;
        font-family: 'Raleway', sans-serif;
        h1,h2,h4,h6{
            color: ${props => props.theme.mainColor}
        }
        h3{
            color: ${props => props.theme.secondColor}
        }
        h5{
            color: ${props => props.theme.thirdColor}
        }
    }

`
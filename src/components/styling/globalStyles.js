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

        h1,h2,h3,h4,h5,h6{
            font-weight: normal;
        }
        h1,h2,h4{
            color: ${props => props.theme.mainColor}
        }
        h3{
            color: ${props => props.theme.secondColor}
        }
        h5,h6{
            color: ${props => props.theme.thirdColor}
        }

        
        h1{
            font-size: 8rem;
        }
        h2{
            font-weight: bold;
        }
        h3{
            font-size: 2.15rem;
        }
        h6{
            font-size: 1.2rem;
        }




        button{
            cursor: pointer;
        }
    }

`
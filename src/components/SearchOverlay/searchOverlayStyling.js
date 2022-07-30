import styled from "styled-components";

export const StyledSearchOverlay= styled.div`
    background-color: #1E213A;  

    position: absolute;
    z-index: 1;

    width: 100%;
    height: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;
    .styledSearchOverlay--container{
        height: 95%;
        width: 80%;
        display: flex;
        flex-direction: column;
        gap: 2vh;
    }
    .styledSearchOverlay--exitComponentDiv{
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }
    .styledSearchOverlay--exitComponentDiv:hover{
        cursor: pointer;
    }
    .styledSearchOverlay--favCityContainer{
        width: 100%;
        display: flex;
        gap: 2vh;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content:center;
    }
    .styledSearchOverlay--formDiv{
        width: 100%;
    }
    .styledSearchOverlay--formDiv form{
        gap: 1vw;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }
    .styledSearchOverlay--formDiv input{
        width: 60%;
    }
    .styledSearchOverlay--formDiv form > *{
        padding: 0.85em;
    }
    .form-inputElement{
        border: solid 1px ${props => props.theme.thirdColor};
        color:${props => props.theme.thirdColor};
        flex-basis: 0px;
        flex-grow: 2;
        background: transparent;
    }
    .form-inputElement:focus{
    }
    .form-buttonElement{
        border: none;
        flex-grow: 1;
        background-color: ${props => props.theme.searchButton};
        color: ${props => props.theme.mainColor};
        transition: 2s;
    }
    .form-buttonElement:hover{
        background-color: #6E75DD;
    }

`
import styled from "styled-components";

export const StyledSearchOverlay= styled.div`

    position: absolute;
    z-index: 1;

    width: 80%;
    height: 100%;

    display: flex;
    flex-direction: column;
    gap: 3vh;
    justify-content: flex-start;
    align-items: center;
    
    background-color: #1E213A;
    .styledSearchOverlay--favCityContainer{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content:cen
    }

    .styledSearchOverlay--formDiv form{
        gap: 2vw;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }.styledSearchOverlay--formDiv form > *{
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
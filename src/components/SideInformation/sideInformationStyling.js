import styled from "styled-components";

export const SideInformationStyled = styled.div`
    grid-column: span 2;
    
    height: 100%;

    background-color: ${props => props.theme.bodySecondColor};
    display: flex;
    justify-content: center;
    align-items: center;
    
    .SideInformationStyled--container{
        width: 80%;
        max-width: 700px;
        height: 90%;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

    }

    .SideInformationStyled__container--temperatureChooseDiv{
        display: flex;
        justify-content: end;
        gap: 0.5rem;
    }
    .SideInformationStyled__container--temperatureChooseDiv button{
        border: none;
        border-radius: 54px;
        padding: 8px;

        cursor: pointer;

        background-color: ${props => props.theme.elementBackGround};
        color: ${props => props.theme.mainColor};
    }

    .buttonSelected{
        background-color: ${props => props.theme.mainColor} !important ;
        color: ${props => props.theme.unselectedOption} !important;
    }

`
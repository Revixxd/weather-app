import styled from "styled-components";

export const SideInformationStyled = styled.div`
    grid-column: span 2;

    background-color: ${props => props.theme.bodySecondColor};

    
    .SideInformationStyled--container{
        margin: auto;
        height: 100%;
        width: 90%;
        max-width: 750px;

        display: flex;
        flex-direction: column;
        justify-content: space-around;
        gap: 1.5rem;
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
    .footer{
        padding: 10px;
        text-align: center;
    }
    .footer a, u{
        color: ${props => props.theme.secondColor};
    }

`
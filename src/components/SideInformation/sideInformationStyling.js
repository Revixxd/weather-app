import styled from "styled-components";

export const SideInformationStyled = styled.div`
    grid-column: span 2;

    background-color: ${props => props.theme.bodySecondColor};

    display: block;
    
    
    .SideInformationStyled--position{
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .SideInformationStyled--container{
        width: 90%;
        max-width: 750px;
        height: 95%;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 30px;
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
        text-align: center;
    }
    .footer a, u{
    color: ${props => props.theme.secondColor};
    }

`
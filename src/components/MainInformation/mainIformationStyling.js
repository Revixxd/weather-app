import styled from "styled-components";

export const MainInformationStyled = styled.div`
    @media (max-width:60em){
        grid-column: span 2;
    }

    height: 100%;

    background-color: ${props => props.theme.bodyMainColor};

    display: flex;
    justify-content: center;
    align-items: center;

    .container{
        justify-content: space-between;
        align-items: center;
        display: flex;
        height: 95%;
        width: 80%;
        flex-direction: column;
    }
    .container--locationInputDiv{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .container--imageContainer{
        
    }
    .container--imageContainer img{
        width: 100%;
    }
`
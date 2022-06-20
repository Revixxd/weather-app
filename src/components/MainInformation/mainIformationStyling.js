import styled from "styled-components";

export const MainInformationStyled = styled.div`
    @media (max-width:43em){
        grid-column: span 2;
    }
    
    //for position absolute overlay component
    position: relative;
    
    height: 100%;
    min-height: 100vh;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background-color: ${props => props.theme.bodyMainColor};

    .container{
        
        height: 80%;
        width: 80%;
        max-width: 400px;

        justify-content: space-between;
        align-items: center;
        display: flex;
        flex-direction: column;
    }
    .container--locationInputDiv{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: inherit;
    }
    .container--imageContainer{
        
    }
    .container--imageContainer img{
        margin: 0 auto;
        max-width: 100%;
    }
`
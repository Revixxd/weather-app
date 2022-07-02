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
    
    button{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container{
        
        height: 95%;
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
    .container--locationInputDiv svg{
        font-size: 25px;
    }
    .container--locationInputDiv button{
        cursor: pointer;
        color: ${props => props.theme.mainColor};
        background-color: ${props => props.theme.buttonBackground};
        border: none;
        padding: 0.75em;
        display: flex;
    }
    .container__locationInputDiv--roundedButton{
        display: block;
        border-radius: 50%;
    }
    .container--imageContainer{
        
    }
    .container--imageContainer img{
        margin: 0 auto;
        max-width: 100%;
    }
    .container--information{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5vh;
    }
    .container__information--temperaturediv{
        display: flex;
        flex-direction: row;
        align-items: first baseline;
    }
    .container--footer{
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        gap: 3vh;
    }
    .container__footer--dateDiv{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0.75rem;
        justify-content: center;

    }
    .container__footer--dateDiv span{
        color: ${props => props.theme.mainColor}
    }
`
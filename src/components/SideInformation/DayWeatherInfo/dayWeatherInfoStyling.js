import styled from "styled-components";

export const DayWeatherInfoStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h3{
        color: ${props => props.theme.mainColor};
        font-size: 1.8rem;
        font-weight: 500;
    }
    h2{
        font-weight: 600;
    }
    .weekTemperature--container{
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(250px, 1fr));
        gap: 1rem;
    }
    .weekTemperature__container--element{
        background-color: ${props => props.theme.elementBackGround};



        display: flex;
        flex-direction: column;

        padding: 0.25em;
        
        flex-basis: 200px;
        flex-grow: 1;
        align-items: center;
    }
    .weekTemperature__container__element--upperElement{
        height: 9vh;
    }
    .weekTemperature__container__element--textContent{
        display: flex;
        flex-direction: row;
        gap: 0.2rem;
        align-items: first baseline;
    }
    
`
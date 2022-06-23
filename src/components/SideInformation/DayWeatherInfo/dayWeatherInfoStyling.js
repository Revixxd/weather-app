import styled from "styled-components";

export const DayWeatherInfoStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .weekTemperature--container{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 2rem;
    }
    .weekTemperature__container--element{
        background-color: ${props => props.theme.elementBackGround};
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1.35em;
    }
    .weekTemperature__container__element--textContent{
        display: flex;
        flex-direction: row;
        align-items: first baseline;
    }
    
`
import styled from "styled-components";

export const DayWeatherInfoStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .weekTemperature--container{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 5rem;
    }
    .weekTemperature__container--element{
        background-color: ${props => props.theme.elementBackGround};
        flex-grow: 1;
        flex-basis: 200px;
    }

`
import styled from "styled-components";

export const DayWeatherInfoStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .weekTemperature--container{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10rem;
    }
    .weekTemperature__container--element{
        width: 200px;
        background-color: ${props => props.theme.elementBackGround};
    }
`
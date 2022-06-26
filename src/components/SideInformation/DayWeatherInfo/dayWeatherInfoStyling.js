import styled from "styled-components";

export const DayWeatherInfoStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .weekTemperature--container{
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(150px, 1fr));
        gap: 1rem;
    }
    .weekTemperature__container--element{
        background-color: ${props => props.theme.elementBackGround};
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 0.35em;
        flex-basis: 200px;
        flex-grow: 1;
        align-items: center;
    }
    .weekTemperature__container__element--textContent{
        display: flex;
        flex-direction: row;
        align-items: first baseline;
    }
    
`
import styled from "styled-components";

export const DayWeatherInfoStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .weekTemperature--container{
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(300px, 1fr));
        gap: 2rem;
    }
    .weekTemperature__container--element{
        background-color: ${props => props.theme.elementBackGround};
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1.35em;
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
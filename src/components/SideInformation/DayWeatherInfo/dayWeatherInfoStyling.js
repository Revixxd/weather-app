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
    progress{
        accent-color: #FFEC65;
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

        padding: 1em;
        
        flex-basis: 200px;
        flex-grow: 1;
        align-items: center;
        justify-content: center;
    }
    .weekTemperature__container__element--textContent{
        display: flex;
        flex-direction: row;
        gap: 0.2rem;
        align-items: first baseline;
    }
    .weekTemperature__container__element__textContent--progresDiv{
        display:flex;
        flex-direction: column;

    }
    .weekTemperature__container__element__progresDiv--legend{
        display: flex;
        justify-content: space-between;

        h6{
            font-size: 12px
        }
    }


`
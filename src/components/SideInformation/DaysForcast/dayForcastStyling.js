import styled from "styled-components";

export const DayForcastStyling = styled.div`
    /* display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem; */
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(120px,1fr));
    gap: 1rem;

    justify-items: center;
`
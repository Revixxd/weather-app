import styled from "styled-components";

export const DayForcastStyling = styled.div`
    /* display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem; */
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(7rem,1fr));
    gap: 0.75rem;

    justify-items: center;
`
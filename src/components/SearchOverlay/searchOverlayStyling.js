import styled from "styled-components";

export const StyledSearchOverlay= styled.div`
    position: absolute;
    z-index: 1;

    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: #1E213A;

    .StyledSearchOverlay--container{
        height: 80%;
        width: 80%;
        max-width: 400px;
    }
`
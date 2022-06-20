import styled from "styled-components";

import {elementBackGround} from "../../../styling/themes" 

export const TodayHighlightsElementStyled = styled.div`
    width: 120px;
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 0.3rem;
    background-color: ${props => props.theme.elementBackGround};

    .imgContainer{
        max-width: 5rem
    }
    .imgContainer img{
        max-width: 100%;
    }
    .tempretureInfo{
        width: 80%;
        display: flex;
        justify-content: inherit;
        align-items: baseline;
    }
`
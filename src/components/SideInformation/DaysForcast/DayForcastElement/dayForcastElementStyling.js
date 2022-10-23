import styled from 'styled-components'

import { elementBackGround } from '../../../styling/themes'

export const DayForcastElementStyled = styled.div`
    width: 100%;
    max-width: 120px;
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 0.3rem;
    background-color: ${(props) => props.theme.elementBackGround};

    h4 {
        font-size: 14px;
    }
    .imgContainer {
        max-width: 5rem;
    }
    .imgContainer img {
        max-width: 100%;
        max-height: 80px;
    }
    .tempretureInfo {
        width: 80%;
        display: flex;
        justify-content: inherit;
        align-items: baseline;
    }
`

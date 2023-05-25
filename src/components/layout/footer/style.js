import styled from 'styled-components'
import { color } from '../../../utils/constants'

export const Wrapper = styled.div`
    text-align: center;
    background-color: ${color.accent};
    padding: 1rem;

    * {
        color: white;
        font-weight: 500;
    }

    > div {
        position: relative;
        max-width: 1200px;
        margin: auto;
    }

    div div {
        position: absolute;
        right: 0;
        top: -3rem;
        background-color: ${color.light};
        color: ${color.accent};
        cursor: pointer;
    }
`

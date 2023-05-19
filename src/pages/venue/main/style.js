import styled from 'styled-components'
import { color } from '../../../utils/constants'

export const Wrapper = styled.div`
    background-color: ${color.light};
    border-radius: 2rem 2rem 0 0;
    position: relative;
    top: -2rem;

    @media screen and (min-width: 750px) {
        max-width: 750px;
        margin: auto;
    }

    @media screen and (min-width: 1200px) {
        max-width: 1200px;

        * {
            max-width: 40rem;
        }
    }
`

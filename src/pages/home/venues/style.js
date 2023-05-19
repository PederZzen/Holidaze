import styled from 'styled-components'
import { color } from '../../../utils/constants'

export const Wrapper = styled.div`
    z-index: 2;
    border-radius: 2rem;
    padding-top: 3rem;
    position: relative;
    top: -2rem;
    background-color: ${color.light};

    img {
        width: 100%;
    }
`

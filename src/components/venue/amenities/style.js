import styled from 'styled-components'
import { color } from '../../../utils/constants'

export const Wrapper = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 0.5rem;

    div {
        display: flex;
        align-items: center;
        gap: 0.3rem;

        * {
            color: ${color.accent};
        }
    }
`

import styled from 'styled-components'
import { color } from '../../../utils/constants'

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    z-index: 99;
    background-color: ${color.accent};
`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0.5rem;
    max-width: 1200px;
    margin: auto;

    img,
    svg {
        cursor: pointer;
    }
`

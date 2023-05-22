import styled from 'styled-components'
import { color } from '../../../utils/constants'

export const Wrapper = styled.div`
    z-index: 2;
    border-radius: 2rem;
    padding-top: 2rem;
    position: relative;
    top: -2rem;
    background-color: ${color.light};

    img {
        width: 100%;
    }
`

export const Search = styled.div`
    max-width: 1200px;
    margin: 0.5rem;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 1.5rem;
    border: 1px solid gray;
    max-width: 20rem;

    input {
        outline: none;
        border: none;
        background-color: ${color.light};
        transition: all 0.5s;
        padding-left: 0.5rem;
    }

    @media screen and (min-width: 1200px) {
        margin: 0.5rem auto;
    }
`

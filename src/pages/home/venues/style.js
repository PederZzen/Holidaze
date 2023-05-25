import styled from 'styled-components'
import { color } from '../../../utils/constants'

export const Wrapper = styled.div`
    z-index: 2;
    max-width: 1200px;
    margin: auto;
    padding-top: 4rem;
    position: relative;
    background-color: ${color.light};

    img {
        width: 100%;
    }
`

export const Search = styled.div`
    margin: auto;
    max-width: 1200px;

    div {
        border: 1px solid gray;
        max-width: 25rem;
        padding: 0.5rem 1rem;
        border-radius: 2rem;
        display: flex;
        box-shadow: 0 0 5px -2px black;
    }

    input {
        width: 100%;
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

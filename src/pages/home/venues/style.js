import styled from 'styled-components'
import { color } from '../../../utils/constants'

export const Wrapper = styled.div`
    z-index: 2;
    max-width: 1000px;
    margin: auto;
    padding-top: 4rem;
    position: relative;
    background-color: ${color.light};

    img {
        width: 100%;
    }
`

export const Filter = styled.div`
    margin: 0 0.5rem 4rem;
    background-color: ${color.accent};
    color: white;
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 0 0 5px -1px black;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
        padding-left: 0.5rem;
        border: none;
        outline: none;
        background-color: ${color.light};
    }

    .searchWrapper {
        width: 100%;
    }

    .search {
        border: 1px solid gray;
        background-color: ${color.light};
        color: ${color.accent};
        padding: 0.5rem 1rem;
        border-radius: 2rem;
        display: flex;
        box-shadow: 0 0 5px -2px black;
        width: 100%;
    }

    .price {
        display: flex;
        align-items: center;
        gap: 2rem;

        div {
            display: flex;
            flex-direction: column;
        }

        label {
            margin-right: 0.5rem;
        }

        input {
            padding: 0.5rem 1rem;
            border-radius: 2rem;
            border: 1px solid gray;
            box-shadow: 0 0 5px -2px black;
            width: 100%;
        }
    }

    @media screen and (min-width: 550px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
`

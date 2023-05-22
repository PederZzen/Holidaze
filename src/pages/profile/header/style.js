import styled from 'styled-components'
import { color } from '../../../utils/constants'

export const Wrapper = styled.div`
    text-align: center;
    position: relative;
    padding: 2rem 0.5rem 5rem;
    max-width: 1200px;
    margin: auto;

    * {
        color: ${color.light};
    }

    img {
        background-color: ${color.light};
        border-radius: 50%;
        border: 2px solid ${color.light};
        width: 60%;
        max-width: 15rem;
        box-shadow: 0 0 1.5rem 0rem black;
        aspect-ratio: 1/1;
        object-fit: cover;
        height: 100%;
    }

    h1 {
        margin-top: 2rem;
        font-size: 1.5rem;
    }

    h2 {
        font-size: 1rem;
        font-weight: 500;
        opacity: 0.5;
        max-width: 80%;
        word-wrap: break-word;
        display: inline-block;
        position: relative;

        &::after {
            content: '';
            height: 1px;
            width: 120%;
            background-color: ${color.light};
            position: absolute;
            left: 50%;
            transform: translate(-50%);
            bottom: -0.5rem;
        }
    }
    h3 {
        margin-top: 1rem;
        opacity: 0.5;
        font-weight: 500;
    }

    svg {
        position: absolute;
        bottom: 2rem;
        right: 0.5rem;
        font-size: 1.5rem;
        color: ${color.light};
        cursor: pointer;
    }

    @media screen and (min-width: 750px) {
        text-align: left;
        display: flex;
        align-items: center;

        h2 {
            max-width: 100%;
        }

        img {
            width: 80%;
        }
    }
`

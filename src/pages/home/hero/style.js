import styled from 'styled-components'
import { color } from '../../../utils/constants'
import background from './home-background.png'

export const Wrapper = styled.div`
    background: url(${background}) no-repeat right;
    background-size: cover;
    height: 90vh;
    z-index: 1;
    position: relative;
    padding-top: 2rem;
    overflow: hidden;

    div {
        color: ${color.light};
        position: relative;
        z-index: 3;
        max-width: 1200px;
        margin: auto;
        top: 50%;
        left: 0.5rem;
        translate: 0 -50%;

        h1 {
            font-size: 3rem;
            line-height: 3.5rem;
            max-width: 30rem;
        }

        h2 {
            font-size: 1rem;
            font-weight: normal;
            max-width: 20rem;
        }

        button {
            margin-top: 2rem;
        }
    }

    ::after {
        content: '';
        width: 100%;
        height: 100%;
        background-color: ${color.accent};
        opacity: 0.7;
        z-index: 2;
        position: absolute;
        top: 0;
        left: 0;
    }

    @media screen and (min-width: 750px) {
        background-size: 60%;
        background-position: 100% 20%;

        ::after {
            opacity: 1;
            background: linear-gradient(
                to right,
                ${color.accent} 50%,
                transparent
            );
        }
    }

    @media screen and (min-width: 1200px) {
        background-position: 100% 35%;
    }
`

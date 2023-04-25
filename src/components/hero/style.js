import styled from "styled-components";
import { color } from "../../utils/constants";

export const Wrapper = styled.div `
    background: url("home-background.png") no-repeat right;
    background-size: cover;
    height: 80vh;
    z-index: 1;
    position: relative;
    margin-bottom: 5rem;

    div {
        color: ${color.light};
        position: relative;
        z-index: 3;
        max-width: 28rem;
        top: 50%;
        left: 1rem;
        translate: 0 -50%;

        h1 {
            font-size: 3rem;
            line-height: 3.5rem;
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
        opacity: .7;
        z-index: 2;
        position: absolute;
        top: 0;
        left: 0;
    }
`
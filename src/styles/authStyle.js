import styled from "styled-components";
import { color } from "../utils/constants";

export const Wrapper = styled.div `
    background-color: ${color.accent};
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${color.light};

    img {
        width: 10rem;
    }

    h1 {
        font-size: 1.2rem;
        font-weight: 500;
        margin-bottom: 2rem;
    }

    a {
        color: ${color.main};
        filter: brightness(150%);
    }

    p {
        color: ${color.light};
    }

    button {
        margin-bottom: 1rem;
    }
`
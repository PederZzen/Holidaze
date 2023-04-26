import styled from "styled-components";
import { color } from "../../../utils/constants";

export const Wrapper = styled.div `
    display: flex;
    justify-content: space-between;
    padding: 2rem .5rem;
    background-color: ${color.light};
    border-radius: 2rem;
    position: relative;
    top: -2rem;

    div {
        max-width: 60%;
    }

    h1 {
        font-size: 1.5rem;
    }
`
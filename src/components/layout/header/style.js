import styled from "styled-components";
import { color } from "../../../utils/constants";

export const Wrapper = styled.div `
    position: relative;
    width: 100%;
    z-index: 99;
`

export const Nav = styled.nav`
    background-color: ${color.accent};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem .5rem;

    img,
    svg {
        cursor: pointer;
    }
`
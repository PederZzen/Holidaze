import styled from "styled-components";
import { color } from "../../../utils/constants";

export const Wrapper = styled.div `
    /* position: fixed; */
    width: 100%;
    z-index: 99;
`

export const Nav = styled.nav`
    background-color: ${color.accent};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;

    img,
    svg {
        cursor: pointer;
    }
`

export const Menu = styled.div `
    display: flex;
    flex-direction: column;
    gap: .5rem;
    background-color: ${color.light};
    position: absolute;
    right: 0;
    margin-right: 1rem;
    padding: 2rem 3rem;
    border-radius: 1rem;
    box-shadow: 0 0 5px -2px ${color.accent};

    *:last-child {
        margin-top: 1rem;
    }

    * {
        text-decoration: none;
        color: ${color.accent};
    }
`
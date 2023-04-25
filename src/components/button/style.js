import styled from "styled-components";
import { color } from "../../utils/constants";

export const Wrapper = styled.button `
    background-color: ${color.main};
    color: ${color.light};
    border: none;
    border-radius: 1rem;
    font-size: 1rem;
    font-weight: bold;
    padding: .5rem 1rem;
    cursor: pointer;
    transition: all .5s;

    &:hover {
        filter: brightness(120%);
        box-shadow: 0 0 1px 1px ${color.main};
    }
`
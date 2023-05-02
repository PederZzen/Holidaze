import styled from "styled-components";
import { color } from "../../../../utils/constants";

export const SettingsDropdown = styled.div `
    background-color: ${color.light};
    position: absolute;
    right: 1rem;
    bottom: -5rem;
    padding: 0 1rem 1rem;
    box-shadow: 0 0 5px -2px ${color.accent};
    border-radius: 1rem;

    p {
        color: ${color.accent};
        cursor: pointer;
        opacity: 1;
        font-weight: 400;
        transition: all .3s;

        &:hover {
            filter: brightness(150%);
        }
    }
`

export const Input = styled.input `
    width: 100%;
    padding: .5rem;
    border-radius: 1rem;
    border: 1px solid ${color.accent};
    outline: none;
`
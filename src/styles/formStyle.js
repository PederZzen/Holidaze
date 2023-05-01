import styled from "styled-components";
import { color } from "../utils/constants";

export const StyledForm = styled.form `
    display: flex;
    flex-direction: column;
    width: 80%;
    align-items: center;
    margin: 2rem 0;

    input {
        background-color: ${color.light};
        border: none;
        border-radius: 1.2rem;
        padding: .8rem .5rem;
        width: 100%;
        max-width: 25rem;
        outline: none;
    }

    span {
        color: ${color.main};
        filter: brightness(150%);
        padding: .2rem;
        text-align: center;
    }

`
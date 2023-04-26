import styled from "styled-components";
import { color } from "../../utils/constants";

export const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;

    a {
        color: ${color.main};
        margin-top: 2rem;
        font-weight: 800;
        letter-spacing: .05rem;
    }
`
import styled from "styled-components";
import { color } from "../../../../utils/constants";

export const Wrapper = styled.div `
    display: flex;
    align-items: center;
    gap: .5rem;

    img {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
    }

    p {
        font-weight: 500;
    }

    a {
        color: ${color.accent};
        transition: all .3s;

        &:hover {
            filter: brightness(150%);
        }
    }
`
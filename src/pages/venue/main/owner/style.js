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
    
    div {
        display: flex;
        flex-direction: column;
    }

    a:first-of-type {
        font-weight: 500;
    }

    a:last-of-type {
        color: ${color.accent};
        transition: all .3s;

        &:hover {
            filter: brightness(150%);
        }
    }
`
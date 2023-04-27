import styled from "styled-components";
import { color } from "../../../../../utils/constants";

export const Wrapper = styled.div `
    text-align: center;
    border: 1px solid ${color.accent};
    width: 5rem;
    height: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    color: ${color.accent};
    
    p {
        font-size: .8rem;
    }
`
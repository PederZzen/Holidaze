import styled from "styled-components"
import { color } from "../../../utils/constants"

export const Wrapper = styled.div `
    position: relative;
`

export const ImageIcon = styled.div `
    position: absolute;
    display: flex;
    gap: .5rem;
    padding: 0 .3rem;
    font-size: .8rem;
    right: .5rem;
    bottom: .5rem;
    background-color: ${color.accent};
    opacity: .8;
    border-radius: .2rem;
    color: ${color.light};

    img {
        width: .8rem;
    }
`
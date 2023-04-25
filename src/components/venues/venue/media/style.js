import styled from "styled-components"
import { color } from "../../../../utils/constants"

export const Carousel = styled.div `
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
    gap: 1rem;
`

export const CarouselContent = styled.img `
    flex: 0 0 auto;
`

export const ImageIcon = styled.div `
    position: absolute;
    display: flex;
    gap: .5rem;
    padding: 0 .3rem;
    font-size: .8rem;
    right: 1rem;
    bottom: 2rem;
    background-color: ${color.accent};
    opacity: .8;
    border-radius: .2rem;
    color: ${color.light};

    img {
        width: .8rem;
    }
`
import styled from "styled-components";
import { color } from "../../../../../utils/constants";

export const Wrapper = styled.div `
    position: relative;
`

export const SliderContent = styled.img `
    height: 20rem;
    object-fit: cover;
`

export const Buttons = styled.div `
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 0;
    padding: .5rem;
    color: ${color.accent};
    width: 100%;
    height: 100%;
    
    * {
        position: relative;
        top: 45%;
        width: 1.5rem;
        height: 1.5rem;
        padding: .05rem;
        border-radius: 50%;
        cursor: pointer;  
        transition: all .3s ;
        z-index: 99;
    }

    &:hover {
        * {
            background-color: ${color.light};

            &:hover {
                opacity: .5;
            }
        }
    }
`
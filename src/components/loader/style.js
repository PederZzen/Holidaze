import styled from "styled-components";
import { color } from "../../utils/constants";

export const Wrapper = styled.div `
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 99;
    background-color: ${color.light};
    display: flex;
    justify-content: center;
    align-items: center;
`
import styled from "styled-components";

export const Wrapper = styled.div `
    position: relative;

    &::after {
        content: '';
        background-color: gray;
        width: 96%;
        height: 2px;
        opacity: .3;
        border-radius: 1px;
        left: 50%;
        transform: translate(-50%);
        bottom: 0;
        position: absolute;
    }
`
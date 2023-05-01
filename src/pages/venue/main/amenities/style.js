import styled from "styled-components";

export const Wrapper = styled.div `
    margin: 5rem 0;
    position: relative;

    >div {
        margin-top: 1rem;

        * {
            margin-bottom: 0.5rem;
        }
    }

    h2 {
        font-size: 1.3rem;
        font-weight: 500;
    }

    &::after {
        content: '';
        background-color: gray;
        width: 100%;
        height: 1.5px;
        opacity: .3;
        border-radius: 1px;
        left: 50%;
        transform: translate(-50%);
        bottom: -2rem;
        position: absolute;
    }
    
`
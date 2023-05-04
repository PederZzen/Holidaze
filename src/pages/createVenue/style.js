import styled from "styled-components";
import { color } from "../../utils/constants";

export const Wrapper = styled.div `
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 30rem;

    h1 {
        margin-bottom: 4rem;
        text-align: center;
    }

    form {
       > div {
            width: 100%;
            position: relative;
            
            input,
            textarea {
                border: 1px solid ${color.accent};
                width: 100%;
                background-color: transparent;
            }

            &:focus-within > label,
            input:not(:placeholder-shown) + label,
            textarea:not(:placeholder-shown) + label {
                top: -.5rem;
                left: 1rem;
                font-size: .7rem;
                color: ${color.accent};
                font-weight: 500;
            }

            label {
                position: absolute;
                background-color: ${color.light};
                transition: all .3s;
                left: .5rem;
                top: .5rem;
                color: gray;
            }
        } 

        section {
            align-self: flex-start;
            display: flex;
            flex-direction: column;
            gap: 1rem;

            div {
                display: flex;
                gap: .5rem;
            }
        }
    }
`
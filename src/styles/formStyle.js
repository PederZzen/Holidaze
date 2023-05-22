import styled from 'styled-components'
import { color } from '../utils/constants'

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 25rem;
    margin: 2rem 0;

    > div {
        display: flex;
        flex-direction: column;
        width: 100%;
        position: relative;

        input:not([type='checkbox']),
        textarea {
            border: 1px solid ${color.accent};
            width: 100%;
            background-color: transparent;
        }

        &:focus-within label,
        input:not(:placeholder-shown) + label,
        textarea:not(:placeholder-shown) + label {
            top: -0.5rem;
            left: 1rem;
            font-size: 0.7rem;
            color: ${color.accent};
            font-weight: 500;
        }

        label {
            position: absolute;
            background-color: ${color.light};
            transition: all 0.3s;
            left: 0.5rem;
            top: 0.5rem;
            color: gray;
            padding: 0 0.2rem;
            cursor: auto;
        }

        p {
            cursor: pointer;
        }
    }

    section {
        align-self: flex-start;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 2rem;

        button {
            margin: 0;
        }

        div {
            display: flex;
            gap: 0.5rem;
            align-items: center;

            input {
                appearance: none;
                position: relative;

                &::before {
                    content: '';
                    display: inline-block;
                    width: 16px;
                    height: 16px;
                    border: 1px solid ${color.accent};
                    border-radius: 4px;
                    transition: 0.3s;
                }

                :checked::before {
                    background-color: ${color.accent};
                }
            }
        }
    }

    input,
    textarea {
        background-color: ${color.light};
        border: none;
        border-radius: 1.2rem;
        padding: 0.8rem 0.5rem;
        max-width: 25rem;
        outline: none;
    }

    textarea {
        resize: none;
        height: 15rem;
    }

    input[type='number'] {
        width: 50%;
        -moz-appearance: textfield;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    span {
        color: ${color.main};
        filter: brightness(150%);
        padding: 0.2rem;
        text-align: left;
    }

    button {
        margin: 0 auto;
    }
`

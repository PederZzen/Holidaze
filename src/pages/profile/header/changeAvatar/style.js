import styled from 'styled-components'
import { color } from '../../../../utils/constants'

export const Wrapper = styled.div`
    max-width: 1200px;
    margin: auto;
    position: relative;
    bottom: -5rem;
`

export const SettingsDropdown = styled.div`
    background-color: ${color.light};
    z-index: 2;
    position: absolute;
    right: 0;
    bottom: -5rem;
    padding: 0 1rem 1rem;
    box-shadow: 0 0 5px -2px ${color.accent};
    border-radius: 1rem;

    p {
        color: ${color.accent};
        cursor: pointer;
        opacity: 1;
        font-weight: 400;
        transition: all 0.3s;
        margin-top: 1rem;

        &:hover {
            filter: brightness(150%);
        }
    }
`

export const Input = styled.input`
    width: 100%;
    padding: 0.5rem;
    border-radius: 1rem;
    border: 1px solid ${color.accent};
    outline: none;
`

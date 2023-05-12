import styled from 'styled-components'
import { color } from '../../../../utils/constants'

export const MenuStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    background-color: ${color.light};
    position: absolute;
    right: -0.5rem;
    bottom: -10.5rem;
    margin-right: 1rem;
    padding: 2rem 3rem;
    border-radius: 1rem;
    box-shadow: 0 0 5px -2px ${color.accent};

    *:last-child {
        margin-top: 1rem;
    }

    * {
        text-decoration: none;
        color: ${color.accent};
    }
`

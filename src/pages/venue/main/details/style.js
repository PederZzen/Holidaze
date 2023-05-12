import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { color } from '../../../../utils/constants'

export const Wrapper = styled.div`
    padding: 3rem 0.5rem;

    h1 {
        font-size: 1.2rem;
        margin-bottom: 0.7rem;
    }
`

export const EditPost = styled.div`
    background-color: ${color.light};
    box-shadow: 0 0 5px -2px ${color.accent};
    position: absolute;
    top: 3rem;
    right: 1rem;
    padding: 0.5rem;
    text-align: right;
    border-radius: 0.5rem;

    * {
        margin: 0.4rem;
        cursor: pointer;
    }
`

export const SettingsIcon = styled(FontAwesomeIcon)`
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.5rem;
    color: ${color.accent};
    cursor: pointer;
`

export const GuestsAndPrice = styled.div`
    display: flex;
    justify-content: space-between;

    > p {
        font-size: 1rem;
        font-weight: 700;

        span {
            font-weight: 500;
        }
    }
`
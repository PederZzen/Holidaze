import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { color } from '../../../../utils/constants'
import { Modal } from 'antd'

export const Wrapper = styled.div`
    padding: 3rem 0.5rem;

    h1 {
        font-size: 1.6rem;
        font-weight: 500;
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
    z-index: 2;

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

export const StyledModal = styled(Modal)`
    .ant-modal-content,
    .ant-modal-header {
        background-color: ${color.light};
    }

    .mediaField {
        position: relative;

        span {
            position: absolute;
            background-color: #ff5454;
            text-align: center;
            right: -2.5rem;
            top: 0.35rem;
            height: 2rem;
            width: 2rem;
            border-radius: 50%;
            color: white;
            border: none;
            font-weight: 800;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
                filter: brightness(150%);
            }
        }

        p {
            margin-bottom: 2rem;
            color: black;
            transition: all 0.3s;

            &:hover {
                cursor: pointer;
                color: ${color.main};
            }
        }
    }
`

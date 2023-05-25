import { Drawer } from 'antd'
import styled from 'styled-components'

export const Wrapper = styled.div`
    margin: 4rem 0;
    display: flex;
    justify-content: center;

    .login {
        text-align: center;

        button {
            margin-top: 1rem;
        }
    }

    @media screen and (min-width: 750px) {
        justify-content: flex-start;
        margin: 4rem 0.5rem;
    }

    @media screen and (min-width: 1200px) {
        position: absolute;
        top: 0;
        right: 0;
        box-shadow: 0 0 4px 0 gray;
        border-radius: 1rem;
        padding: 1rem;
    }
`

export const BookingDrawer = styled(Drawer)`
    border-radius: 2rem 2rem 0 0;
    background-color: red;
`

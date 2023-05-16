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
`

export const BookingDrawer = styled(Drawer)`
    border-radius: 2rem 2rem 0 0;
`

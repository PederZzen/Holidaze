import React, { useEffect, useState } from 'react'
import Button from '../../../../components/button'
import { BookingDrawer, Wrapper } from './style'
import Booking from './booking'
import { Link } from 'react-router-dom'
import useWindowWidth from '../../../../hooks/useWindowWidth'

const CheckAvailability = ({ venue }) => {
    const [open, setOpen] = useState(false)
    const token = localStorage.getItem('token')
    const { windowWidth } = useWindowWidth()

    const showDrawer = () => {
        setOpen(true)
    }
    const onClose = () => {
        setOpen(false)
    }

    return (
        <Wrapper>
            {windowWidth >= 750 ? (
                <Booking venue={venue} />
            ) : (
                <BookingDrawer
                    placement="bottom"
                    closable={false}
                    onClose={onClose}
                    open={open}
                    height={window.innerHeight - 50}
                >
                    <Booking venue={venue} />
                </BookingDrawer>
            )}
            {windowWidth <= 750 && token ? (
                <Button onClick={showDrawer} content={'Check Availability'} />
            ) : (
                !token && (
                    <Link to="/login" className="login">
                        <p>You need to be logged in to book this venue</p>
                        <Button content={'Log in'} />
                    </Link>
                )
            )}
        </Wrapper>
    )
}

export default CheckAvailability

import React, { useState } from 'react'
import Button from '../../../../components/button'
import { BookingDrawer, Wrapper } from './style'
import Booking from '../booking'

const CheckAvailability = () => {
    const [open, setOpen] = useState(false)

    const showDrawer = () => {
        setOpen(true)
    }
    const onClose = () => {
        setOpen(false)
    }

    return (
        <Wrapper>
            <BookingDrawer
                placement="bottom"
                closable={false}
                onClose={onClose}
                open={open}
            >
                <Booking />
            </BookingDrawer>
            <Button onClick={showDrawer} content={'Check Availability'} />
        </Wrapper>
    )
}

export default CheckAvailability

import React from 'react'
import Venue from '../../../../components/venue'

const Bookings = ({ bookings }) => {
    console.log(bookings)
    return bookings.map((booking, idx) => {
        return <Venue key={idx} venue={booking.venue} booking={booking} />
    })
}

export default Bookings

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MaxGuests from '../data/maxGuests'
import Price from '../data/price'
import { Content, Wrapper } from './style'
import Amenities from './amenities'
import useWindowWidth from '../../hooks/useWindowWidth'
import placeholder from './placeholder.jpg'
import dayjs from 'dayjs'

const Venue = ({ venue, booking }) => {
    const { windowWidth } = useWindowWidth()
    const [dateFrom, setDateFrom] = useState()
    const [dateTo, setDateTo] = useState()

    useEffect(() => {
        if (booking) {
            setDateFrom(dayjs(booking.dateFrom).format('D MMM YYYY'))
            setDateTo(dayjs(booking.dateTo).format('D MMM YYYY'))
        }
    }, [])

    return (
        <Link to={`/venue/${venue.id}`}>
            <Wrapper>
                <img
                    src={venue.media ? venue.media : placeholder}
                    alt={venue.name}
                />
                <Content>
                    <div>
                        <div id="title">
                            <h3>{venue.name}</h3>
                            <MaxGuests maxGuests={venue.maxGuests} />
                        </div>
                        {windowWidth >= 750 ? (
                            <Amenities meta={venue.meta} />
                        ) : (
                            ''
                        )}
                        {booking ? (
                            <div id="booking">
                                <p>
                                    {dateFrom} - {dateTo}
                                </p>
                            </div>
                        ) : (
                            ''
                        )}
                    </div>
                    <Price price={venue.price} />
                </Content>
            </Wrapper>
        </Link>
    )
}

export default Venue

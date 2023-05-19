import React from 'react'
import { Link } from 'react-router-dom'
import MaxGuests from '../data/maxGuests'
import Price from '../data/price'
import { Content, Wrapper } from './style'
import Amenities from './amenities'
import useWindowWidth from '../../hooks/useWindowWidth'
import placeholder from './placeholder.jpg'

const Venue = ({ venue, booking }) => {
    const { windowWidth } = useWindowWidth()

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
                            <div>
                                <p>
                                    {booking.dateFrom} to {booking.dateTo}
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

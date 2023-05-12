import React from 'react'
import { Link } from 'react-router-dom'
import MaxGuests from '../data/maxGuests'
import Price from '../data/price'
import { Content, Wrapper } from './style'
import { useState } from 'react'
import { useEffect } from 'react'
import Amenities from './amenities'

const Venue = ({ venue }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <Link to={`/venue/${venue.id}`}>
            <Wrapper>
                <img src={venue.media} alt={venue.name} />
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
                    </div>
                    <Price price={venue.price} />
                </Content>
            </Wrapper>
        </Link>
    )
}

export default Venue

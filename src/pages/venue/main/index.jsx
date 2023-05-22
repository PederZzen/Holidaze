import React from 'react'
import Amenities from './amenities'
import Description from './description'
import Owner from './owner'
import { Wrapper } from './style'
import Details from './details'
import CheckAvailability from './checkAvailability'

const Main = ({ venue }) => {
    const user = localStorage.getItem('name')

    return (
        <Wrapper>
            <Details venue={venue} />
            <Description desc={venue.description} />
            <Amenities meta={venue.meta} />
            <Owner owner={venue.owner} />
            {user === venue.owner.name ? (
                ''
            ) : (
                <CheckAvailability venue={venue} />
            )}
        </Wrapper>
    )
}

export default Main

import React from 'react'
import Amenities from './amenities'
import Description from './description'
import Owner from './owner'
import CheckAvailability from './checkAvailability'
import { Wrapper } from './style'
import Details from './details'

const Main = ({ venue }) => {
    return (
        <Wrapper>
            <Details
                name={venue.name}
                price={venue.price}
                id={venue.id}
                maxGuests={venue.maxGuests}
                owner={venue.owner.name}
            />
            <Description desc={venue.description} />
            <Amenities meta={venue.meta} />
            <Owner owner={venue.owner} />
            <CheckAvailability />
        </Wrapper>
    )
}

export default Main

import React from 'react'
import Amenities from './amenities'
import Description from './description'
import Owner from './owner'
import CheckAvailability from './checkAvailability'
import { Wrapper } from './style'

const Main = ({ venue }) => {

    return (
        <Wrapper>
            <Description desc={venue.description} />
            <Amenities meta={venue.meta} />
            <Owner owner={venue.owner} />
            <CheckAvailability />
        </Wrapper>
    )
}

export default Main

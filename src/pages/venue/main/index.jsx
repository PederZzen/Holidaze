import React from 'react'
import Amenities from './amenities'
import Description from './description'
import { Wrapper } from './style'

const Main = ({ venue }) => {

    return (
        <Wrapper>
            <Description desc={venue.description} />
            <Amenities meta={venue.meta} />
        </Wrapper>
    )
}

export default Main

import React from 'react'
import MaxGuests from './maxGuests'
import Media from './media'
import Price from './price'
import { Wrapper } from './style'

const Venue = ({ venue }) => {

    return (
        <Wrapper>
            <Media media={venue.media} name={venue.name}/>
            <div>
                <p>{venue.name}</p>
                <MaxGuests maxGuests={venue.maxGuests} />
                <Price price={venue.price} />
            </div>

        </Wrapper>
    )
}

export default Venue
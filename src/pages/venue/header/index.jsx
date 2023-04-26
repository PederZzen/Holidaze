import React from 'react'
import MaxGuests from '../../../components/venues/venue/maxGuests'
import Price from '../../../components/venues/venue/price'
import { Wrapper } from './style'

const Header = ({ venue }) => {
  return (
    <Wrapper>
        <div>
            <h1>{venue.name}</h1>
            <MaxGuests maxGuests={venue.maxGuests} />
        </div>
        <Price price={venue.price} />
    </Wrapper>
  )
}

export default Header

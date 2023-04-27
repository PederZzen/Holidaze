import React from 'react'
import Details from './details'
import ImageSlider from './ImageSlider'
import { Wrapper } from './style'

const Header = ({ venue }) => {
  return (
    <Wrapper>
        <ImageSlider media={venue.media} name={venue.name} />
        <Details name={venue.name} price={venue.price} maxGuests={venue.maxGuests} />
    </Wrapper>
  )
}

export default Header

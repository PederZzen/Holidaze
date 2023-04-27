import React from 'react'
import MaxGuests from '../../../../components/data/maxGuests'
import Price from '../../../../components/data/price'
import { Wrapper } from './style'

const Details = ({ name, price, maxGuests }) => {
  return (
    <Wrapper>
        <h1>{name}</h1>
        <div>
            <MaxGuests maxGuests={maxGuests} />
            <Price price={price} />
        </div>
    </Wrapper>
  )
}

export default Details

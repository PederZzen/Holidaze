import React from 'react'
import { Span, Wrapper } from './style'

const Price = ({ price }) => {
  return (
    <Wrapper>{price}NOK <Span>a night</Span></Wrapper>
  )
}

export default Price

import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper } from './style'

const RouteNotFound = () => {
  return (
    <Wrapper>
      <h1>404: Page not found</h1>
      <Link to="/">Back to main page</Link>
    </Wrapper>
  )
}

export default RouteNotFound

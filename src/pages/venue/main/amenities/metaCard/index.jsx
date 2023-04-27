import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Wrapper } from './style'

const MetaCard = ({ icon, text }) => {
  return (
    <Wrapper>
      <FontAwesomeIcon icon={icon} />
      <p>{text}</p>
    </Wrapper>
  )
}

export default MetaCard

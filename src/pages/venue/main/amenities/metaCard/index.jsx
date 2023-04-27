import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const MetaCard = ({ icon, text }) => {
  return (
    <div>
      <FontAwesomeIcon icon={icon} />
      <p>{text}</p>
    </div>
  )
}

export default MetaCard

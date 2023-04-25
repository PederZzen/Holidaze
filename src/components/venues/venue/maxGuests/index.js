import { faBed } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const MaxGuests = ({ maxGuests }) => {
  return (
    <>
        <FontAwesomeIcon icon={faBed} />
        <p>{maxGuests} guests</p>
    </>
  )
}

export default MaxGuests

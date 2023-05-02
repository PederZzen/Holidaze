import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Icons } from '../../../utils/constants'
import { Wrapper } from './style'

const Header = ({ profile }) => {
  return (
    <Wrapper>
        <img src={profile.avatar ? profile.avatar : "/placeholderImage.png"} alt={`${profile.name}'s avatar`}></img>
        <h1>{profile.name}</h1>
        <h2>{profile.email}</h2>
        <p>Guest{profile.venueManager ? " and owner" : ""}</p>
        {profile.name === localStorage.getItem("name") ? <FontAwesomeIcon icon={Icons.settingsIcon} /> : ""}
    </Wrapper>
  )
}

export default Header

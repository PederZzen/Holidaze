import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Nav, Wrapper } from './style'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  const menu = 
    <Menu>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/createvenue">Create Venue</Link>
    </Menu>    
    
  const toggleMenu = () => {
    setShowMenu(true)
    if (showMenu) {
      setShowMenu(false)
    }
  }

  return (
    <Wrapper>
      <Nav>
          <div>
            <img src='logo.svg' alt='holidaze logo'></img>
          </div>
          <div onClick={toggleMenu}>
            <img src="menuIcon.svg" alt="menu icon" />
          </div>
      </Nav>
      {showMenu ? menu : ""}
    </Wrapper>
  )
}

export default Header

import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Nav, Wrapper } from './style'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const location = useLocation()

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

  useEffect(()=>{
    setShowMenu(false)
  }, [location])


  return (
    <Wrapper>
      <Nav>
          <div>
            <Link to="/">
              <img src='logo.svg' alt='holidaze logo'></img>
            </Link>
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

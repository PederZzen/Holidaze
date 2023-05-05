import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Menu from './menu'
import { Nav, Wrapper } from './style'
import logo from './logo.svg'
import menuIcon from './menuIcon.svg'


const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const location = useLocation()

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
                <img src={logo} alt='holidaze logo'></img>
              </Link>
            </div>
            <div onClick={toggleMenu}>
              <img src={menuIcon} alt="menu icon" />
            </div>
        </Nav>
        {showMenu ? <Menu /> : ""}
      </Wrapper>
    )
}

export default Header

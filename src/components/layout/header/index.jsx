import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Menu from './menu'
import { Nav, Wrapper } from './style'
import logo from './logo.svg'
import menuIcon from './menuIcon.svg'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)

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
                    <Link to="/">
                        <img src={logo} alt="holidaze logo"></img>
                    </Link>
                </div>

                <div onClick={toggleMenu}>
                    <img src={menuIcon} alt="menu icon" />
                </div>

                {showMenu ? <Menu /> : ''}
            </Nav>
        </Wrapper>
    )
}

export default Header

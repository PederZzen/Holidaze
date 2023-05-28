import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Menu from './menu'
import { Nav, Wrapper } from './style'
import logo from './logo.svg'
import menuIcon from './menuIcon.svg'
import useWindowWidth from '../../../hooks/useWindowWidth'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const location = useLocation()
    const { windowWidth } = useWindowWidth()

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    useEffect(() => {
        setShowMenu(false)
    }, [location])

    useEffect(() => {
        if (windowWidth > 750) {
            setShowMenu(true)
        }
    }, [windowWidth, location])

    return (
        <Wrapper>
            <Nav>
                <div>
                    <Link to="/">
                        <img src={logo} alt="holidaze logo"></img>
                    </Link>
                </div>
                {windowWidth < 750 ? (
                    <div onClick={toggleMenu}>
                        <img src={menuIcon} alt="menu icon" />
                    </div>
                ) : null}
                {showMenu ? <Menu /> : ''}
            </Nav>
        </Wrapper>
    )
}

export default Header

import { Link } from 'react-router-dom'
import { MenuStyled } from './style'

const Menu = () => {
    const user = localStorage.getItem('name')

    const logOut = () => {
        localStorage.clear()
    }

    if (!localStorage.getItem('token')) {
        return (
            <MenuStyled>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
                <Link to="/login">Create Venue</Link>
            </MenuStyled>
        )
    } else {
        return (
            <MenuStyled>
                <Link to={`/profile/${user}`}>Profile</Link>
                <Link to="/" onClick={logOut}>
                    Log out
                </Link>
                <Link to="/createvenue">Create Venue</Link>
            </MenuStyled>
        )
    }
}

export default Menu

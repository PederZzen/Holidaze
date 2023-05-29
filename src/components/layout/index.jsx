import { useLocation } from 'react-router-dom'
import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => {
    const location = useLocation()

    return (
        <>
            {location.pathname === '/register' ||
            location.pathname === '/login' ? (
                ''
            ) : (
                <Header />
            )}
            <main>{children}</main>
            {location.pathname === '/register' ||
            location.pathname === '/login' ? null : (
                <Footer />
            )}
        </>
    )
}

export default Layout

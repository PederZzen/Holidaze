import { useLocation } from 'react-router-dom'
import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => {
    const location = useLocation()

    return (
        <div style={{ position: 'relative' }}>
            {location.pathname === '/register' ||
            location.pathname === '/login' ? (
                ''
            ) : (
                <Header />
            )}
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout

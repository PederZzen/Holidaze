import { useLocation } from "react-router-dom"
import Header from "./header"

const Layout = ({children}) => {
    const location = useLocation()

    return (
        <>
            {location.pathname === "/register" || location.pathname === "/login" ? "" : <Header />}    
            <main>{children}</main>
        </>
    )
}

export default Layout

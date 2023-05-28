import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const location = useLocation()

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }

        setWindowWidth(window.innerWidth)

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [location, windowWidth])

    return { windowWidth }
}

export default useWindowWidth

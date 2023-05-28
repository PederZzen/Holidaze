import React, { useEffect, useState } from 'react'
import Hero from './hero'
import Loader from '../../components/loader'
import { SORT_DESC, VENUES_URL } from '../../utils/constants'
import useFetch from '../../hooks/useFetch'
import Venues from './venues'
import Meta from '../../utils/meta'

const Home = () => {
    const { data, isLoading, isError } = useFetch(VENUES_URL + SORT_DESC)
    const [venues, setVenues] = useState(data)

    useEffect(() => {
        setVenues(data)
    }, [data])

    if (!data) {
        return <p>No data..</p>
    }

    if (isLoading) {
        return <Loader />
    }

    if (isError) {
        return <p>An error has occured</p>
    }

    return (
        <>
            <Meta
                title="Venues"
                description="Discover the perfect getaway at Holidaze: the ultimate platform to rent out your home or find your dream vacation rental. Explore a world of possibilities as homeowners maximize their earnings and travelers unlock unique accommodations. Whether you're looking for a cozy cabin, a luxurious beachfront villa, or a charming city apartment, Holidaze connects you to unforgettable experiences. Start your adventure today and embark on a seamless journey of home sharing and extraordinary escapes"
            />
            <Hero />
            <Venues venues={venues} />
        </>
    )
}

export default Home

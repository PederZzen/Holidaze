import React, { useEffect, useState } from 'react'
import Hero from '../../components/hero'
import Loader from '../../components/loader'
import Venues from '../../components/venues'
import useFetch from '../../hooks/useFetch'
import { VENUES_URL } from '../../utils/constants'

const Home = () => {
    const { data, isLoading, isError } = useFetch(VENUES_URL)
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
            <Hero />
            <Venues venues={venues}/>
        </>
    )
}

export default Home

import React, { useEffect, useState } from 'react'
import Hero from './hero'
import Loader from '../../components/loader'
import { SORT_DESC, VENUES_URL } from '../../utils/constants'
import useFetch from '../../hooks/useFetch'
import Venues from './venues'

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
            <Hero />
            <Venues venues={venues} />
        </>
    )
}

export default Home

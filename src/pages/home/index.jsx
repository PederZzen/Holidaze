import React, { useEffect, useState } from 'react'
import Hero from '../../components/hero'
import Loader from '../../components/loader'
import Venue from './venue'
import useFetch from '../../hooks/useFetch'
import { VENUES_URL } from '../../utils/constants'
import { Wrapper } from './style'

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
            <Wrapper>
                {venues ? venues.map((venue, idx) => {
                    return <Venue key={idx} venue={venue}>{venue.name}</Venue>
                }) : "No data.."}
            </Wrapper>
        </>
    )
}

export default Home

import React, { useEffect, useState } from 'react'
import Venue from '../../components/venues/venue'
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

    return (
        <Wrapper>
            <h1>Make your home work for you</h1>
            <h2>Earn extra income by renting out your home to travellers around the globe</h2>
            <button>Get Started</button>

            <div>
                {venues ? venues.map((venue, idx) => {
                    return <Venue key={idx} venue={venue}>{venue.name}</Venue>
                }) : "No data.."}
            </div>
        </Wrapper>
    )
}

export default Home

import { useParams } from 'react-router-dom'
import Loader from '../../components/loader'
import useFetch from '../../hooks/useFetch'
import { BOOKINGS_FLAG, OWNER_FLAG, VENUES_URL } from '../../utils/constants'
import Header from './header'
import Main from './main'

const Venue = () => {
    const { id } = useParams()
    const { data, isLoading, isError } = useFetch(
        VENUES_URL + id + OWNER_FLAG + '&' + BOOKINGS_FLAG
    )

    if (!data) {
        return <p>No data...</p>
    }

    if (isLoading) {
        return <Loader />
    }

    if (isError) {
        return <p>An error has occured</p>
    }

    return (
        <>
            <Header venue={data} />
            <Main venue={data} />
        </>
    )
}

export default Venue

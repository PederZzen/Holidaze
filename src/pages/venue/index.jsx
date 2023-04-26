import { useParams } from 'react-router-dom'
import Loader from '../../components/loader'
import Media from '../../components/venues/venue/media'
import useFetch from '../../hooks/useFetch'
import { VENUES_URL } from '../../utils/constants'
import Header from './header'

const Venue = () => {
    const { id } = useParams()
    const { data, isLoading, isError } = useFetch(VENUES_URL + id)


    console.log(data.media);

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
            <Media media={data.media} name={data.name}/>
            <Header venue={data} />
        </>
    )
}

export default Venue

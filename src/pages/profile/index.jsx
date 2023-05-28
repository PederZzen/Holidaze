import { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Loader from '../../components/loader'
import { BOOKINGS_FLAG, PROFILE_URL, VENUE_FLAG } from '../../utils/constants'
import Header from './header'
import Main from './main'
import { Wrapper } from './style'
import useFetchAuth from '../../hooks/useFetchAuth'
import Meta from '../../utils/meta'

const Profile = () => {
    const { user } = useParams()
    const location = useLocation()

    const [fetchData, response] = useFetchAuth()

    useEffect(() => {
        fetchData(
            `${PROFILE_URL}${user}?${VENUE_FLAG}&${BOOKINGS_FLAG}`,
            null,
            'GET'
        )
    }, [location])

    if (!response) {
        return <Loader />
    }

    return (
        <>
            <Meta
                title={response.name}
                description="Craft your unique profile on Holidaze and enhance your home sharing or travel experience. "
            />
            <Wrapper>
                <Header profile={response} />
                <Main profile={response} />
            </Wrapper>
        </>
    )
}

export default Profile

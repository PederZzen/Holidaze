import { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Loader from '../../components/loader'
import { BOOKINGS_FLAG, PROFILE_URL, VENUE_FLAG } from '../../utils/constants'
import Header from './header'
import Main from './main'
import { Wrapper } from './style'
import usePostPut from '../../hooks/usePostPut'

const Profile = () => {
    const { user } = useParams()
    const location = useLocation()

    const [fetchData, response] = usePostPut()

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
        <Wrapper>
            <Header profile={response} />
            <Main profile={response} />
        </Wrapper>
    )
}

export default Profile

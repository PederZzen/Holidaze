import { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Loader from '../../components/loader'
import useFetchAuth from '../../hooks/useFetchAuth'
import { BOOKINGS_FLAG, PROFILE_URL, VENUE_FLAG } from '../../utils/constants'
import Header from './header'
import Main from './main'
import { Wrapper } from './style'

const Profile = () => {
  const { user } = useParams()
  const location = useLocation()

  const [ getData, response, error ] = useFetchAuth()

  useEffect(()=>{
    getData(`${PROFILE_URL}${user}?${VENUE_FLAG}&${BOOKINGS_FLAG}`)
  }, [location])

  if (!response) {
    return <Loader />
  }

  if (error) {
    return <p>An error has occured..</p>
  }

  return (
    <Wrapper>
      <Header profile={response} />
      <Main profile={response} />
    </Wrapper>
  )
}

export default Profile

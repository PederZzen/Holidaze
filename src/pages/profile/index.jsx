import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Loader from '../../components/loader'
import { PROFILE_URL } from '../../utils/constants'
import Header from './header'

const Profile = () => {
  const { user } = useParams()
  const token = localStorage.getItem("token")
  const [profile, setProfile] = useState(null)
  const location = useLocation()

  useEffect(()=> {
    const fetchUser = async (url, userData) => {
      try {
        const postData = {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(userData),
        } 
        const response = await fetch(url, postData)
        const json = await response.json()
        setProfile(json)
        console.log(json);
      }
      catch (error) {
        console.error(error);
      }
    }
    fetchUser(PROFILE_URL + user)

  }, [location])

  if (!profile) {
    return <Loader />
  }

  return (
    <div>
      <Header profile={profile} />
    </div>
  )
}

export default Profile

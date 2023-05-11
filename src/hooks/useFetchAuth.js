import { useState } from 'react'

const useFetchAuth = () => {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)
    const token = localStorage.getItem('token')

    const fetchData = async (url) => {
        try {
            const postData = {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
            const response = await fetch(url, postData)
            const json = await response.json()
            setResponse(json)
        } catch (err) {
            setError(err)
        }
    }

    return [fetchData, response, error]
}

export default useFetchAuth

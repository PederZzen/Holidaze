import { useState } from 'react'

const useFetchAuth = () => {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)
    const token = localStorage.getItem('token')

    const fetchData = async (url, data, method) => {
        try {
            const postData = {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            }

            if (data) {
                postData.body = JSON.stringify(data)
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

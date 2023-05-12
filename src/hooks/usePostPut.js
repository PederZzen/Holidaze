import { useState } from 'react'

const usePostPut = () => {
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
                body: JSON.stringify(data),
            }
            const response = await fetch(url, postData)
            const json = await response.json()
            setResponse(json)
            window.location.reload()
        } catch (err) {
            setError(err)
        }
    }

    return [fetchData, response, error]
}

export default usePostPut

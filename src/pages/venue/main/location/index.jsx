import React from 'react'
import { Wrapper } from './style'

const Location = ({ location }) => {
    return (
        <Wrapper>
            <h2>Location</h2>
            <div>
                <p>{location.address !== 'Unknown' ? location.address : ''}</p>
                <p>
                    {location.city !== 'Unknown' ? location.city + ', ' : ''}{' '}
                    {location.zip !== 'Unknown' ? location.zip : ''}
                </p>
                <p>{location.country !== 'Unknown' ? location.country : ''}</p>
                <p>
                    {location.continent !== 'Unknown' ? location.continent : ''}
                </p>
                <p>
                    {location.address === 'Unknown' &&
                    location.city === 'Unknown' &&
                    location.zip === 'Unknown' &&
                    location.country === 'Unknown' &&
                    location.continent === 'Unknown'
                        ? 'Location unknown'
                        : ''}
                </p>
            </div>
        </Wrapper>
    )
}

export default Location

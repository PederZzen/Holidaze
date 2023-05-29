import { Wrapper } from './style'

const Location = ({ location }) => {
    const regex = /^(Unknown|)$/

    const isLocationUnknown = () =>
        regex.test(location.address) &&
        regex.test(location.city) &&
        regex.test(location.zip) &&
        regex.test(location.country) &&
        regex.test(location.continent)

    return (
        <Wrapper>
            <h2>Location</h2>
            <div>
                <p>
                    {location.address !== 'Unknown' && location.address !== ''
                        ? location.address
                        : ''}
                </p>
                <p>
                    {location.city !== 'Unknown' && location.city !== ''
                        ? location.city +
                          (location.zip !== 'Unknown' && location.zip !== ''
                              ? `, ${location.zip}`
                              : '')
                        : ''}
                </p>
                <p>
                    {location.country !== 'Unknown' && location.country !== ''
                        ? location.country
                        : ''}
                </p>
                <p>
                    {location.continent !== 'Unknown' &&
                    location.continent !== ''
                        ? location.continent
                        : ''}
                </p>
                <p>{isLocationUnknown(location) ? 'Location unknown' : ''}</p>
            </div>
        </Wrapper>
    )
}

export default Location

import { Link } from 'react-router-dom'
import Venue from '../../../../components/venue'
import { Wrapper } from './style'
import Button from '../../../../components/button'

const Venues = ({ venues }) => {
    if (venues.length > 0) {
        return venues.map((venue, idx) => {
            return <Venue key={idx} venue={venue} />
        })
    }

    return (
        <Wrapper>
            <h1>You currently have no venues listed</h1>
            <Link to="/createvenue">
                <Button content={'Create venue'} />
            </Link>
        </Wrapper>
    )
}

export default Venues

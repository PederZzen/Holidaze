import Venue from '../../../../components/venue'
import { Wrapper } from '../venues/style'
import { Link } from 'react-router-dom'
import Button from '../../../../components/button'

const Bookings = ({ bookings }) => {
    if (bookings.length > 0) {
        return bookings.map((booking, idx) => {
            return <Venue key={idx} venue={booking.venue} booking={booking} />
        })
    }

    return (
        <Wrapper>
            <h1>You currently have no bookings</h1>
            <Link to="/">
                <Button content={'See all venues'} />
            </Link>
        </Wrapper>
    )
}

export default Bookings

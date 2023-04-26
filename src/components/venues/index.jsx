import { Wrapper } from "./style"
import Venue from "./venue"

const Venues = ({ venues }) => {
  return (
    <Wrapper>
        {venues ? venues.map((venue, idx) => {
            return <Venue key={idx} venue={venue}>{venue.name}</Venue>
        }) : "No data.."}
    </Wrapper>
  )
}

export default Venues

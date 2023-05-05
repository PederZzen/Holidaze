import Venue from "../../../../components/venue";

const Venues = ({ venues }) => {

  return (
    venues.map((venue, idx) => {
      return <Venue key={idx} venue={venue} />
    })
  )
}

export default Venues

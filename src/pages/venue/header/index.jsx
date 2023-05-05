import Details from './details'
import Media from './media'
import { Wrapper } from './style'

const Header = ({ venue }) => {

  return (
    <Wrapper>
        <Media media={venue.media} name={venue.name} />
        <Details name={venue.name} price={venue.price} maxGuests={venue.maxGuests} owner={venue.owner.name}/>
    </Wrapper>
  )
}

export default Header

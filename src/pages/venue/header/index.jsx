import Media from './media'
import { Wrapper } from './style'

const Header = ({ venue }) => {
    return (
        <Wrapper>
            <Media media={venue.media} name={venue.name} />
        </Wrapper>
    )
}

export default Header

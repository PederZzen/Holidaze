import Media from './media'
import { Wrapper } from './style'

const Header = ({ venue }) => {
    return (
        <Wrapper>
            <Media venue={venue} />
        </Wrapper>
    )
}

export default Header

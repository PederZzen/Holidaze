import { faBed } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Wrapper } from './style'

const MaxGuests = ({ maxGuests }) => {
    return (
        <Wrapper>
            <FontAwesomeIcon icon={faBed} />
            <p>{maxGuests} guests</p>
        </Wrapper>
    )
}

export default MaxGuests

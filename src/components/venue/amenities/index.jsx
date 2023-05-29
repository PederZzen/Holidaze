import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Icons } from '../../../utils/constants'
import { Wrapper } from './style'

const Amenities = ({ meta }) => {
    return (
        <Wrapper>
            {meta.wifi ? (
                <div>
                    <FontAwesomeIcon icon={Icons.wifiIcon} />
                    <p>Wifi</p>
                </div>
            ) : (
                ''
            )}
            {meta.parking ? (
                <div>
                    <FontAwesomeIcon icon={Icons.parkingIcon} />
                    <p>Parking</p>
                </div>
            ) : (
                ''
            )}
            {meta.breakfast ? (
                <div>
                    <FontAwesomeIcon icon={Icons.breakfastIcon} />
                    <p>Breakfast</p>
                </div>
            ) : (
                ''
            )}
            {meta.pets ? (
                <div>
                    <FontAwesomeIcon icon={Icons.petIcon} />
                    <p>Pet friendly</p>
                </div>
            ) : (
                ''
            )}
        </Wrapper>
    )
}

export default Amenities

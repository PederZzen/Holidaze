import ChangeAvatar from './changeAvatar'
import { Wrapper } from './style'

const Header = ({ profile }) => {
    return (
        <Wrapper>
            <div>
                <img
                    src={
                        profile.avatar
                            ? profile.avatar
                            : '/placeholderImage.png'
                    }
                    alt={`${profile.name}'s avatar`}
                ></img>
            </div>
            <div>
                <h1>{profile.name}</h1>
                <h2>{profile.email}</h2>
                <h3>Guest{profile.venueManager ? ' and owner' : ''}</h3>
            </div>
            <ChangeAvatar name={profile.name} />
        </Wrapper>
    )
}

export default Header

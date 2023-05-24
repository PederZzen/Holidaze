import { Link } from 'react-router-dom'
import { Wrapper } from './style'

const Owner = ({ owner }) => {
    const token = localStorage.getItem('token')
    const user = owner.name
    return (
        <Wrapper>
            <img
                src={owner.avatar ? owner.avatar : '/placeholderImage.png'}
                alt={`${owner.name}'s avatar`}
            ></img>
            <div>
                <Link to={token ? `/profile/${user}/` : '/login'}>
                    {owner.name}'s property
                </Link>
                <a href={`mailto:${owner.email}`}>Contact owner</a>
            </div>
        </Wrapper>
    )
}

export default Owner

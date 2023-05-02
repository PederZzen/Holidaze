import { Link } from "react-router-dom";
import { Wrapper } from "./style";

const Owner = ({ owner }) => {
  const user = owner.name
  return (
    <Wrapper>
        <img src={owner.avatar ? owner.avatar : "/placeholderImage.png"} alt={`${owner.name}'s avatar`}></img>
        <div>
            <Link to={`/profile/${user}/`}>{owner.name}'s property</Link>
            <a href={`mailto:${owner.email}`}>Contact owner</a>
        </div>
    </Wrapper>
  )
}

export default Owner

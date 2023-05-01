import { Wrapper } from "./style";

const Owner = ({ owner }) => {
  return (
    <Wrapper>
        <img src={owner.avatar ? owner.avatar : "/placeholderImage.png"} alt={`${owner.name}'s avatar`}></img>
        <div>
            <p>{owner.name}'s property</p>
            <a href={`mailto:${owner.email}`}>Contact owner</a>
        </div>
    </Wrapper>
  )
}

export default Owner

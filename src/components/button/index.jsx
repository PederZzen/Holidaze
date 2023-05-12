import { Wrapper } from './style'

const Button = ({ content, onClick }) => {
    return <Wrapper onClick={onClick}>{content}</Wrapper>
}

export default Button

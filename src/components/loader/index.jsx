import { ClipLoader } from 'react-spinners'
import { color } from '../../utils/constants'
import { Wrapper } from './style'

const Loader = () => {
  return (
    <Wrapper>
      <ClipLoader size={100} color={color.main}/>
    </Wrapper>
  )
}

export default Loader

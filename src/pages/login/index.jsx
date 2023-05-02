import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/button'
import { Wrapper } from '../../styles/authStyle'
import { StyledForm } from '../../styles/formStyle'
import { LOGIN_URL } from '../../utils/constants'
import { schema } from './schema'

const Login = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
      const loginUser = async (url, userData) => {
      try {
        const postData = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
        const response = await fetch(url, postData)
        const json = await response.json()
        localStorage.setItem("token" , json.accessToken)
        localStorage.setItem("name" , json.name)
      } 
      catch (error) {
        console.error(error);
      }
      finally {
        navigate("/")
      }
    }

    loginUser(LOGIN_URL, data)

  }

  return (
    <Wrapper>
        <img src='logo.svg' alt='Holidaze logo'></img>
        <h1>Your home away from home!</h1>
        <p>Please enter your details</p>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <input {...register('email')} type='email' placeholder='* Email'/>
            <span>{errors.email?.message}&nbsp;</span>

            <input {...register('password')} type='password' placeholder='* Password'/>
            <span>{errors.password?.message}&nbsp;</span>
            <Button content='Login' />
        </StyledForm>
        <p>New to Holidaze? <Link to='/register'>Register</Link> instead</p>
    </Wrapper>
  )
}

export default Login

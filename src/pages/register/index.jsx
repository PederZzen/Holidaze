import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/button'
import { Wrapper } from '../../styles/authStyle'
import { REGISTER_URL } from '../../utils/constants'
import { schema } from './schema';
import { StyledForm } from '../../styles/formStyle';

const Register = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    delete data.retypePassword

    const registerUser = async (url, userData) => {
      try {
        const postData = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
        const response = await fetch(url, postData)
        console.log(response);
        const data = await response.json()
        console.log(data);
      } 
      catch (error) {
        console.error(error);
      }
      finally {
        navigate("/")
      }
    }

    registerUser(REGISTER_URL, data)

  }
  
  return (
    <Wrapper>
        <img src='logo.svg' alt='Holidaze logo'></img>
        <h1>Your home away from home!</h1>
        <p>Please enter your details</p>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <input {...register('name')} type='text' placeholder='* Name'/>
            <span>{errors.name?.message}&nbsp;</span>

            <input {...register('email')} type='email' placeholder='* Email'/>
            <span>{errors.email?.message}&nbsp;</span>

            <input {...register('password')} type='password' placeholder='* Password'/>
            <span>{errors.password?.message}&nbsp;</span>

            <input {...register('confirmPassword')} type='password' placeholder='* Confirm Password'/>
            <span>{errors.confirmPassword?.message}&nbsp;</span>

            <Button content='Register' />
        </StyledForm>
        <p>Already a user? <Link to='/login'>Login</Link> instead</p>
    </Wrapper>
  )
}

export default Register

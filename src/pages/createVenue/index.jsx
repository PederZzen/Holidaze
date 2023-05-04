import { yupResolver } from '@hookform/resolvers/yup'
import { Switch } from 'antd'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from '../../components/button'
import { StyledForm } from '../../styles/formStyle'
import { schema } from './schema'
import { Wrapper } from './style'

const CreateVenue = () => {
  const [wifi, setWifi] = useState(false)
  const [parking, setParking] = useState(false)
  const [breakfast, setBreakfast] = useState(false)
  const [pets, setPets] = useState(false)

  const meta = {
    "wifi": wifi,
    "parking": parking,
    "breakfast": breakfast,
    "pets": pets,
  }

  function Data (name, description, media, price, maxGuests, meta) {
    this.name = name;
    this.description = description;
    this.media = media;
    this.price = price;
    this.maxGuests = maxGuests;
    this.meta = meta;
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    const media = []
    if (data.media) {
      media.push(data.media)
    }
    const venueData = new Data(data.name, data.description, media, data.price, data.maxGuests, meta)
    console.log(venueData);
  }

  const handleWifi = (change) => {
    setWifi(change)
  }
  const handleParking = (change) => {
    setParking(change)
  }
  const handleBreakfast = (change) => {
    setBreakfast(change)
  }
  const handlePets = (change) => {
    setPets(change)
  }

  return (
    <Wrapper>
      <h1>Rent out your home</h1>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input type='name' placeholder='' id='name' {...register('name')}/>
              <label htmlFor='name'>*Name of venue</label>
              <span>{errors.name?.message}&nbsp;</span>
            </div>

            <div>
              <textarea placeholder=' ' id='desc' {...register('description')}/>
              <label htmlFor='desc'>*Description</label>
              <span>{errors.description?.message}&nbsp;</span>
            </div>

            <div>
              <input type="number" min="0" placeholder=' ' id='price' {...register('price')}/>
              <label htmlFor='price'>*Price</label>
              <span>{errors.price?.message}&nbsp;</span>
            </div>

            <div>
              <input type="number" min="0" placeholder=' ' id='maxGuests' {...register('maxGuests')}/>
              <label htmlFor='maxGuests'>*Max guests</label>
              <span>{errors.maxGuests?.message}&nbsp;</span>
            </div>

            <div>
              <input type="text" min="0" placeholder=' ' id='media' {...register('media')}/>
              <label htmlFor='media'>Media</label>
              <span>{errors.media?.message}&nbsp;</span>
            </div>

            <section>
              <div>
                <Switch onChange={handleWifi} id='wifi'/>
                <label htmlFor='wifi'>Wifi</label>
              </div>
              <div>
                <Switch onChange={handleParking} id='parking'/>
                <label htmlFor='parking'>Parking available</label>
              </div>
              <div>
                <Switch onChange={handleBreakfast} id='breakfast'/>
                <label htmlFor='breakfast'>Breakfast included</label>
              </div>
              <div>
                <Switch onChange={handlePets} id='pets'/>
                <label htmlFor='pets'>Pet friendly</label>
              </div>
            </section>
            

            <Button content='Register' />
        </StyledForm>
    </Wrapper>
  )
}

export default CreateVenue

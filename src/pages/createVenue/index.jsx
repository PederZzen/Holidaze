import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from '../../components/button'
import usePostPut from '../../hooks/usePostPut'
import { StyledForm } from '../../styles/formStyle'
import { VENUES_URL } from '../../utils/constants'
import { schema } from './schema'
import { Wrapper } from './style'

const CreateVenue = () => {
    const [inputFields, setInputFields] = useState([''])
    const [fetchData, response, error] = usePostPut()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = (data) => {
        fetchData(VENUES_URL, data, 'POST')
        console.log(response)
    }

    const add = () => {
        setInputFields([...inputFields, ''])
    }

    return (
        <Wrapper>
            <h1>Rent out your home</h1>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input
                        type="name"
                        placeholder=""
                        id="name"
                        {...register('name')}
                    />
                    <label htmlFor="name">*Name of venue</label>
                    <span>{errors.name?.message}&nbsp;</span>
                </div>

                <div>
                    <textarea
                        placeholder=" "
                        id="desc"
                        {...register('description')}
                    />
                    <label htmlFor="desc">*Description</label>
                    <span>{errors.description?.message}&nbsp;</span>
                </div>

                <div>
                    <input
                        type="number"
                        min="0"
                        placeholder=" "
                        id="price"
                        {...register('price')}
                    />
                    <label htmlFor="price">*Price</label>
                    <span>{errors.price?.message}&nbsp;</span>
                </div>

                <div>
                    <input
                        type="number"
                        min="0"
                        placeholder=" "
                        id="maxGuests"
                        {...register('maxGuests')}
                    />
                    <label htmlFor="maxGuests">*Max guests</label>
                    <span>{errors.maxGuests?.message}&nbsp;</span>
                </div>

                <div>
                    {inputFields.map((field, idx) => {
                        return (
                            <input
                                type="text"
                                key={idx}
                                placeholder=" "
                                id={`media-${idx}`}
                                {...register(`media[${idx}]`)}
                                style={{ marginBottom: '1rem' }}
                            />
                        )
                    })}
                    <label htmlFor="media-0">Media</label>
                    <p onClick={add}>Add more</p>
                    <span>{errors.media?.message}&nbsp;</span>
                </div>

                <section>
                    <div>
                        <input
                            type="checkbox"
                            {...register('meta.wifi')}
                            id="wifi"
                        />
                        <label htmlFor="wifi">Wifi</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="parking"
                            {...register('meta.parking')}
                        />
                        <label htmlFor="parking">Parking available</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            {...register('meta.breakfast')}
                            id="breakfast"
                        />
                        <label htmlFor="breakfast">Breakfast included</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            {...register('meta.pets')}
                            id="pets"
                        />
                        <label htmlFor="pets">Pet friendly</label>
                    </div>
                </section>

                <Button content="Create venue" />
            </StyledForm>
        </Wrapper>
    )
}

export default CreateVenue

import { Input, Modal } from 'antd'
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MaxGuests from '../../../../components/data/maxGuests'
import Price from '../../../../components/data/price'
import { Icons, VENUES_URL } from '../../../../utils/constants'
import {
    Wrapper,
    EditPost,
    SettingsIcon,
    GuestsAndPrice,
    StyledModal,
} from './style'
import usePostPut from '../../../../hooks/usePostPut'
import { StyledForm } from '../../../../styles/formStyle'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '../../../createVenue/schema'
import Button from '../../../../components/button'

const Details = ({ venue }) => {
    const [settings, showSettings] = useState(false)
    const user = localStorage.getItem('name')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [fetchData, response, error] = usePostPut()
    const navigate = useNavigate()
    const [inputFields, setInputFields] = useState(
        venue.media.map((img) => ({ value: img, visible: true }))
    )

    const onSubmit = async (data) => {
        try {
            const updatedMedia = inputFields.map(
                ({ visible, ...rest }) => rest.value
            )
            data.media = updatedMedia
            await fetchData(VENUES_URL + venue.id, data, 'PUT')
            window.location.reload()
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const showModal = () => {
        setIsModalOpen(true)
    }

    const handleCancel = () => {
        setIsModalOpen(false)
    }

    const deleteVenue = () => {
        fetchData(VENUES_URL + venue.id, null, 'DELETE')
        console.log(response)
        navigate(`/profile/${user}`)
    }

    const settingsDropdown = (
        <EditPost>
            <p onClick={showModal}>Edit post</p>
            <p onClick={deleteVenue}>Delete post</p>
        </EditPost>
    )

    const toggleSettings = () => {
        showSettings(true)
        if (settings) {
            showSettings(false)
        }
    }

    const removeInputField = (index) => {
        const updatedFields = [...inputFields]
        updatedFields[index].visible = false
        updatedFields.splice(index, 1)
        setInputFields(updatedFields)
    }

    const addInputField = () => {
        setInputFields([...inputFields, { value: '', visible: true }])
    }

    const displayDeleteButton = (id) => {}

    return (
        <Wrapper>
            <h1>{venue.name}</h1>
            <GuestsAndPrice>
                <MaxGuests maxGuests={venue.maxGuests} />
                <Price price={venue.price} />
            </GuestsAndPrice>
            {venue.owner.name === user ? (
                <SettingsIcon
                    icon={Icons.settingsIcon}
                    onClick={toggleSettings}
                />
            ) : (
                ''
            )}
            {settings ? settingsDropdown : ''}
            <StyledModal
                title="Edit post"
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
            >
                <StyledForm onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <input
                            placeholder=" "
                            type="text"
                            id="name"
                            defaultValue={venue.name}
                            {...register('name')}
                        />
                        <label htmlFor="name">*Name of venue</label>
                        <span>{errors.name?.message}&nbsp;</span>
                    </div>
                    <div>
                        <textarea
                            placeholder=" "
                            id="desc"
                            defaultValue={venue.description}
                            {...register('description')}
                        />
                        <label htmlFor="desc">*Description</label>
                        <span>&nbsp;</span>
                    </div>
                    <div>
                        <input
                            placeholder=" "
                            type="number"
                            id="price"
                            defaultValue={venue.price}
                            {...register('price')}
                        />
                        <label htmlFor="price">*Price</label>
                        <span>&nbsp;</span>
                    </div>
                    <div>
                        <input
                            placeholder=" "
                            type="number"
                            id="maxGuests"
                            defaultValue={venue.maxGuests}
                            {...register('maxGuests')}
                        />
                        <label htmlFor="maxGuests">*Max guests</label>
                        <span>&nbsp;</span>
                    </div>
                    <div>
                        {inputFields.map((field, idx) => {
                            if (!field.visible) return null
                            return (
                                <div key={idx} className="mediaField">
                                    <div>
                                        <input
                                            placeholder=" "
                                            style={{ marginBottom: '0.5rem' }}
                                            type="text"
                                            id={`media-[${idx}]`}
                                            defaultValue={field.value}
                                            {...register(`media[${idx}]`)}
                                            onChange={(e) => {
                                                const updatedFields = [
                                                    ...inputFields,
                                                ]
                                                updatedFields[idx].value =
                                                    e.target.value
                                                setInputFields(updatedFields)
                                            }}
                                            onMouseEnter={displayDeleteButton}
                                        />
                                        {idx === 0 && (
                                            <label htmlFor={`media-${idx}`}>
                                                Media
                                            </label>
                                        )}
                                        <span>
                                            {errors.media?.[idx]?.message}&nbsp;
                                        </span>
                                    </div>

                                    <button
                                        onClick={() => {
                                            removeInputField(idx)
                                        }}
                                    >
                                        &#10005;
                                    </button>
                                    {idx === inputFields.length - 1 && (
                                        <p onClick={addInputField}>
                                            + Add more images
                                        </p>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                    <section>
                        <div>
                            <input
                                type="checkbox"
                                id="wifi"
                                defaultChecked={venue.meta.wifi}
                                {...register('meta.wifi')}
                            />
                            <label htmlFor="wifi">Wifi</label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                id="parking"
                                defaultChecked={venue.meta.parking}
                                {...register('meta.parking')}
                            />
                            <label htmlFor="parking">Parking available</label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                id="breakfast"
                                defaultChecked={venue.meta.breakfast}
                                {...register('meta.breakfast')}
                            />
                            <label htmlFor="breakfast">
                                Breakfast included
                            </label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                id="pets"
                                defaultChecked={venue.meta.pets}
                                {...register('meta.pets')}
                            />
                            <label htmlFor="pets">Pet friendly</label>
                        </div>
                    </section>

                    <div>
                        <input
                            type="text"
                            placeholder=" "
                            id="address"
                            defaultValue={venue.location.address}
                            {...register('location.address')}
                        />
                        <label htmlFor="address">Address</label>
                        <span>{errors.address?.message}&nbsp;</span>
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder=" "
                            defaultValue={venue.location.city}
                            id="city"
                            {...register('location.city')}
                        />
                        <label htmlFor="city">City</label>
                        <span>{errors.city?.message}&nbsp;</span>
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder=" "
                            id="zip"
                            defaultValue={venue.location.zip}
                            {...register('location.zip')}
                        />
                        <label htmlFor="zip">ZIP</label>
                        <span>{errors.zip?.message}&nbsp;</span>
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder=" "
                            id="country"
                            defaultValue={venue.location.country}
                            {...register('location.country')}
                        />
                        <label htmlFor="country">Country</label>
                        <span>{errors.country?.message}&nbsp;</span>
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder=" "
                            id="continent"
                            defaultValue={venue.location.continent}
                            {...register('location.continent')}
                        />
                        <label htmlFor="continent">Continent</label>
                        <span>{errors.continent?.message}&nbsp;</span>
                    </div>
                    <Button content="Update venue" />
                </StyledForm>
            </StyledModal>
        </Wrapper>
    )
}

export default Details

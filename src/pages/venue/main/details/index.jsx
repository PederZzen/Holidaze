import { Input, Modal } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MaxGuests from '../../../../components/data/maxGuests'
import Price from '../../../../components/data/price'
import { Icons, VENUES_URL } from '../../../../utils/constants'
import { Wrapper, EditPost, SettingsIcon, GuestsAndPrice } from './style'
import usePostPut from '../../../../hooks/usePostPut'
import { StyledForm } from '../../../../styles/formStyle'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

const Details = ({ venue }) => {
    const [settings, showSettings] = useState(false)
    const user = localStorage.getItem('name')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [fetchData, response, error] = usePostPut()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(),
    })

    const showModal = () => {
        setIsModalOpen(true)
    }
    const handleOk = () => {
        setIsModalOpen(false)
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
    const onSubmit = (data) => {}

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
            <Modal
                title="Edit post"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
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
                        <span>&nbsp;</span>
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
                        {venue.media.map((img, idx) => {
                            return (
                                <div>
                                    <input
                                        style={{ marginBottom: '1rem' }}
                                        type="text"
                                        key={idx}
                                        id={`media-[${idx}]`}
                                        defaultValue={img}
                                        {...register(`media[${idx}]`)}
                                    />
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
                </StyledForm>
            </Modal>
        </Wrapper>
    )
}

export default Details

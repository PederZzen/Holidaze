import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { yupResolver } from '@hookform/resolvers/yup'
import { Modal } from 'antd'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import usePostPut from '../../../../hooks/usePostPut'
import { Icons, PROFILE_URL } from '../../../../utils/constants'
import { schema } from './schema'
import { Input, SettingsDropdown, Wrapper } from './style'

const ChangeAvatar = ({ name }) => {
    const userName = localStorage.getItem('name')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [showSettings, setShowSettings] = useState(false)
    const [fetchData, response] = usePostPut()

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

    const deleteAvatar = () => {
        const data = {
            avatar: null,
        }
        fetchData(PROFILE_URL + userName + '/media', data, 'PUT')
        window.location.reload()
    }

    const handleOk = (data) => {
        setIsModalOpen(false)
        fetchData(PROFILE_URL + userName + '/media', data, 'PUT')
        window.location.reload()
    }

    const handleCancel = () => {
        setIsModalOpen(false)
    }

    const toggleSettings = () => {
        setShowSettings(true)
        if (showSettings) {
            setShowSettings(false)
        }
    }

    const settings = (
        <SettingsDropdown>
            <p onClick={showModal}>Update avatar</p>
            <p onClick={deleteAvatar}>Delete avatar</p>
        </SettingsDropdown>
    )

    return (
        <Wrapper>
            {name === localStorage.getItem('name') ? (
                <FontAwesomeIcon
                    onClick={toggleSettings}
                    icon={Icons.settingsIcon}
                />
            ) : (
                ''
            )}
            {showSettings ? settings : ''}
            <Modal
                title="Change avatar"
                open={isModalOpen}
                onOk={handleSubmit(handleOk)}
                onCancel={handleCancel}
            >
                <Input
                    {...register('avatar')}
                    type="text"
                    placeholder="Enter URL of new photo"
                />
                <span>{errors.avatar?.message}</span>
            </Modal>
        </Wrapper>
    )
}

export default ChangeAvatar

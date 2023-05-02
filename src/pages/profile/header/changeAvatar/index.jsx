import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { yupResolver } from '@hookform/resolvers/yup';
import { Modal } from 'antd';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Icons, PROFILE_URL } from '../../../../utils/constants';
import { schema } from './schema';
import { Input, SettingsDropdown } from './style';

const ChangeAvatar = ({ name }) => {
    const token = localStorage.getItem("token")
    const userName = localStorage.getItem("name")
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showSettings, setShowSettings] = useState(false)
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm({
        resolver: yupResolver(schema),
      })

    const showModal = () => {
        setIsModalOpen(true);
    };

    const updateAvatar = async (url, userData) => {
        try {
          const postData = {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
          },
            body: JSON.stringify(userData),
          } 
          const response = await fetch(url, postData)
          const json = await response.json()
          window.location.reload()
        }
        catch (error) {
          console.error(error);
        }
    }

    const deleteAvatar = () => {
        const data = {
            "avatar": null
        }
        updateAvatar(PROFILE_URL + userName + "/media", data)
    }

    const handleOk = (data) => {
        setIsModalOpen(false);
        updateAvatar(PROFILE_URL + userName + "/media", data)
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const toggleSettings = () => {
        setShowSettings(true)
        if (showSettings) {
            setShowSettings(false)
        }
    }

    const settings =
        <SettingsDropdown>
            <p onClick={showModal}>Update avatar</p>
            <p onClick={deleteAvatar}>Delete avatar</p>
        </SettingsDropdown>

    return (
        <>
        {name === localStorage.getItem("name") ? <FontAwesomeIcon onClick={toggleSettings} icon={Icons.settingsIcon} /> : ""}
        {showSettings ? settings : ""}
        <Modal title="Change avatar" open={isModalOpen} onOk={handleSubmit(handleOk)} onCancel={handleCancel}>
            <Input {...register('avatar')} type="text" placeholder='Enter URL of new photo'/>
            <span>{errors.avatar?.message}</span>
        </Modal>
        </>
    );
}

export default ChangeAvatar

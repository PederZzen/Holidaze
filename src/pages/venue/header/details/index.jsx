import { Input, Modal } from 'antd'
import { useState } from 'react'
import MaxGuests from '../../../../components/data/maxGuests'
import Price from '../../../../components/data/price'
import { Icons } from '../../../../utils/constants'
import { Wrapper, EditPost, SettingsIcon, GuestsAndPrice } from './style'

const Details = ({ name, price, maxGuests, owner }) => {
  const [settings, showSettings] = useState(false)  
  const user = localStorage.getItem("name")
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const settingsDropdown = 
    <EditPost>
      <p onClick={showModal}>Edit post</p>
      <p>Delete post</p>
    </EditPost>
  
  const toggleSettings = () => {
    showSettings(true)
    if (settings) {
      showSettings(false)
    }
  }


  return (
    <Wrapper>
        <h1>{name}</h1>
        <GuestsAndPrice>
            <MaxGuests maxGuests={maxGuests} />
            <Price price={price} />
        </GuestsAndPrice>
        {owner === user ? <SettingsIcon icon={Icons.settingsIcon} onClick={toggleSettings}/> : ""}
        {settings ? settingsDropdown : ""}
        <Modal title="Edit post" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        
        </Modal>
    </Wrapper>
  )
}

export default Details

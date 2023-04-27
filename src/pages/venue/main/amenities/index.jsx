import React from 'react'
import { Icons } from '../../../../utils/constants'
import MetaCard from './metaCard'
import { Wrapper } from './style'

const Amenities = ({ meta }) => {
  return (
    <Wrapper>
        {meta.wifi || meta.parking || meta.breakfast || meta.pets ? 
            <h2>We offer</h2> : ""
        }
        {meta.wifi ? <MetaCard icon={Icons.wifiIcon} text="Internet" /> : ""}
        {meta.parking ? <MetaCard icon={Icons.parkingIcon} text="Parking" /> : ""}
        {meta.breakfast ? <MetaCard icon={Icons.breakfastIcon} text="Breakfast" /> : ""}
        {meta.pets ? <MetaCard icon={Icons.petIcon} text="Pet friendly" /> : ""}
    </Wrapper>
  )
}

export default Amenities

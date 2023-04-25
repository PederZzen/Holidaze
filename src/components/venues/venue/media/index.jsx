import React from 'react'
import ImageSlider from './imageSlider'
import { ImageIcon, Wrapper } from './style'

const Media = ({ media, name }) => {
  return (
    <Wrapper>
      <ImageSlider media={media} name={name}/>
      {media.length > 1 ?
        <ImageIcon>
            <img src='imagesicon.svg' alt='Icon'></img> 
            <p>{media.length}</p>
        </ImageIcon>
    : ""}
    </Wrapper>
  )
}

export default Media

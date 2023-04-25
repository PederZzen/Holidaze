import React from 'react'
import { Carousel, CarouselContent, ImageIcon } from './style'

const Media = ({ media, name }) => {
  return (
    <>
      <Carousel>
          {media.map((v, idx) => {
              return <CarouselContent src={v} key={idx} alt={name}></CarouselContent>
          })}
      </Carousel>
      {media.length > 1 ?
        <ImageIcon>
            <img src='imagesicon.svg' alt='Icon'></img> 
            <p>{media.length}</p>
        </ImageIcon>
    : ""}
    </>
  )
}

export default Media

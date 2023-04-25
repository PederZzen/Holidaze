import React from 'react'
import { Carousel } from 'antd'
import { SliderContent } from './style'

const ImageSlider = ({ media, name }) => {
  return (
    <>
      <Carousel>
        {media.map((v, idx) => {
            return (
              <div key={idx}>
                <SliderContent src={v ? v : 'placeholder.jpg'} alt={name}></SliderContent>
              </div>
            )
          })}
      </Carousel>
    </>
    
  )
}

export default ImageSlider

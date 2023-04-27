import React, { useRef } from 'react'
import { Carousel } from 'antd'
import { SliderContent, Wrapper } from './style'

const ImageSlider = ({ media, name }) => {
  const slider = useRef(null)
  return (
    <Wrapper>
      <Carousel ref={slider}>
        {media.map((v, idx) => {
            return (
              <div key={idx}>
                <SliderContent src={v ? v : 'placeholder.jpg'} alt={name}></SliderContent>
              </div>
            )
          })}
      </Carousel>
    </Wrapper>
    
  )
}

export default ImageSlider

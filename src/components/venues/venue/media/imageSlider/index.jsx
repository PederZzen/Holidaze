import React, { useRef } from 'react'
import { Carousel } from 'antd'
import { Buttons, SliderContent, Wrapper } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

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
      {media.length > 1 ? 
          <Buttons>
            <FontAwesomeIcon onClick={() => slider.current.prev()} icon={faChevronLeft} />
            <FontAwesomeIcon onClick={() => slider.current.next()} icon={faChevronRight} />
          </Buttons>
      : ""}
    </Wrapper>
    
  )
}

export default ImageSlider

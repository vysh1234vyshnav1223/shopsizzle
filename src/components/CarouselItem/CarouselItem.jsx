import React from 'react'
import './CarouselItem.css'

const CarouselItem = ({info}) => {
  return (
    <div className='carousel-item-div'>
        <img src={info.image} alt="" />
        <div className='carousel-item-info'>
            <h3>{info.title}</h3>
        </div>
    </div>
  )
}

export default CarouselItem

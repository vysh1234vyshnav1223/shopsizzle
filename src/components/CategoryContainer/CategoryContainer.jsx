import React from 'react'
import './CategoryContainer.css'
import mensclothing from '../../assets/mensclothing.jpg'
import womensclothing from '../../assets/womensclothing.jpg'
import electronics from '../../assets/electronics.jpg'
import jewelery from '../../assets/jewelery.jpg'

const CategoryContainer = ({ categoryName }) => {
   
  const images = {
    'Men\'s Clothing': mensclothing,
    'Women\'s Clothing': womensclothing,
    'Electronics': electronics,
    'Jewelery': jewelery,
  }
    
  const imgURL = images[categoryName] || '';
    
  return (
    <div className='category-container-div'>
        <img src={imgURL} alt="" />
        <h3>{categoryName}</h3>
    </div>
  )
}

export default CategoryContainer

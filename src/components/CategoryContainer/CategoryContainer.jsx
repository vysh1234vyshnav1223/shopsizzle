import React from 'react'
import './CategoryContainer.css'
import mensclothing from '../../assets/mensclothing.jpg'
import womensclothing from '../../assets/womensclothing.jpg'
import electronics from '../../assets/electronics.jpg'
import jewelery from '../../assets/jewelery.jpg'
import { Link } from 'react-router-dom'

const CategoryContainer = ({ categoryName }) => {
   
  const images = {
    'Men\'s Clothing': mensclothing,
    'Women\'s Clothing': womensclothing,
    'Electronics': electronics,
    'Jewelery': jewelery,
  }
    
  const imgURL = images[categoryName] || '';
    
  return (
    <Link to={`/category/${categoryName}`}>
    <div className='category-container-div'>
        <img src={imgURL} alt="" />
        <h3>{categoryName}</h3>
    </div>
    </Link>
  )
}

export default CategoryContainer

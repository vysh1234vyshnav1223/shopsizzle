import React, { useEffect, useState } from 'react'
import './ExploreCarousel.css';
import CarouselItem from '../CarouselItem/CarouselItem';



const ExploreCarousel = ({category}) => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}?limit=3`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setItems(data);
    })
    .catch((err) => {
      console.log(err.message);
    })
  }, [])


  return (
    <div className='explore-carousel-div'>
        <h2>{category.slice(0,1).toUpperCase() + category.slice(1) }</h2>
       <div className='items'>
        {
          items.map(item => (
            <CarouselItem info={item} key={item.id}/>
          ))
        }
      </div>
    </div>
  )
}

export default ExploreCarousel

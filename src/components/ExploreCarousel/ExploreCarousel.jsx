import React, { useEffect, useState } from 'react'
import './ExploreCarousel.css';
import { Link } from 'react-router-dom';
import CarouselItem from '../CarouselItem/CarouselItem';



const ExploreCarousel = (props) => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${props.category}?limit=3`)
    .then((response) => response.json())
    .then((data) => {
      setItems(data);
    })
    .catch((err) => {
      console.log(err.message);
    })
  }, [])


  return (
    <div className='explore-carousel-div'>
        <h2>{props.categoryName}</h2>
       <div className='items'>
        {
          items.map(item => (
            <CarouselItem info={item} key={item.id}/>
          ))
        }
      </div>
      <div className="cta-button">
          <button><Link to={`/category/${props.category}`}>Explore more</Link></button>
        </div>
    </div>
  )
}

export default ExploreCarousel

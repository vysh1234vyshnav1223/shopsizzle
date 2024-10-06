import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router';
import './Categories.css'
import CarouselItem from '../../components/CarouselItem/CarouselItem';


const Categories = () => {
  const [items, setItems] = useState([]);
  const params = useParams();
  const categoryName = params.categoryName.toLowerCase();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
    .then((response) => response.json())
    .then((data) => {
      setItems(data);
    })
    .catch((err) => {
      console.log(err.message);
    })
  }, [])

  return (
    <div className='categories-page-div'>
        <h2>
            {params.categoryName.slice(0,1).toUpperCase() + params.categoryName.slice(1).toLowerCase()}
        </h2>
        <div className='categories-items-div'>
        {
          items.map(item => (
            <CarouselItem info={item} key={item.id}/>
          ))
        }
        </div>
    </div>
  )
}

export default Categories

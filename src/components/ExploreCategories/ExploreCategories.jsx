import React from 'react'
import './ExploreCategories.css';
import CategoryContainer from '../CategoryContainer/CategoryContainer';

const ExploreCategories = () => {

    const categories = [`Men's Clothing`,`Women's Clothing`, 'Electronics', 'Jewelery']

  return (
    <div className='explore-categories-div'>
        <h3>Popular Categories</h3>
        <div className='category-list'>
        {
            categories.map((category) => (
                <CategoryContainer categoryName={category}/>
            ))
        }
        </div>
    </div>
  )
}

export default ExploreCategories

import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import ExploreCarousel from '../components/ExploreCarousel/ExploreCarousel'
import ExploreCategories from '../components/ExploreCategories/ExploreCategories'

const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <ExploreCarousel category={'electronics'} categoryName={'Electronics'}/>
      <ExploreCarousel category={'jewelery'} categoryName={'Jewelery'}/>
      <ExploreCarousel category={`men's%20clothing`} categoryName={`Men's Clothing`}/>
      <ExploreCategories/>
    </div>
  )
}

export default HomePage

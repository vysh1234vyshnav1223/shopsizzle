import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import ExploreCarousel from '../components/ExploreCarousel/ExploreCarousel'

const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <ExploreCarousel category={'electronics'}/>
      <ExploreCarousel category={'jewelery'}/>
    </div>
  )
}

export default HomePage

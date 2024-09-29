import React from 'react'
import './HeroSection.css'
import herosection_img from "../../assets/herosection.png"

const HeroSection = () => {
  return (
    <div className='herosection-div'>
      <div className="herosection-heading">
        <h2>Welcome to one stop shopping destination!</h2>
        <p>Start shopping now!</p>
        <button>Click here</button>
      </div>
      <div className="herosection-icon">
        <img src={herosection_img} alt="" />
      </div>
    </div>
  )
}

export default HeroSection

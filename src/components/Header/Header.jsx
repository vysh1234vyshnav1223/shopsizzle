import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
      <Link to={'/'}>
        <div className='header-div'>
            <h1>ShopSizzle</h1>
            <nav className='header-nav-links'>
              <a>Products</a>
              <a>Categories</a>
              <a>Profile</a>
              <a>Cart</a>
            </nav>
        </div>
        </Link>
  )
}

export default Header

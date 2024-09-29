import React from 'react'
import './Header.css'

const Header = () => {
  return (
        <div className='header-div'>
            <h1>ShopSizzle</h1>
            <nav className='header-nav-links'>
              <a>Products</a>
              <a>Categories</a>
              <a>Profile</a>
              <a>Cart</a>
            </nav>
        </div>
  )
}

export default Header

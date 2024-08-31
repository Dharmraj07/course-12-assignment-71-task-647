import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div>
        <header className='header'>
            <h1>
                ReactMeals
            </h1>
            <button className='cart-btn'>
            <span className="cart-icon">🛒</span>
            <span>Your Cart</span>
            <span className="cart-badge">0</span>

            </button>

        </header>
    </div>
  )
}

export default Header
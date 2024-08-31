import React from 'react'
import './cart.css'

export default function Cart({setCartOpen}) {
  return (
    <div className='AddToCart'>
        <div onClick={()=>setCartOpen(false)}>x</div>
        <div>title</div>
        <div>price</div>
        <div>quantity</div>
    </div>
  )
}

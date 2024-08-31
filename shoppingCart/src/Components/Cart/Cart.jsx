import React, { useState } from 'react';
import './cart.css';

export default function Cart({ setCartOpen, cart }) {

    // Group and count items by id
    const groupedItems = cart.reduce((acc, item) => {
      if (acc[item.id]) {
        acc[item.id].quantity += 1; // Increment quantity if item already exists
      } else {
        acc[item.id] = { ...item, quantity: 1 }; // Initialize with quantity 1 if new item
      }
      return acc;
    }, {});
  
    const groupedItemsArray = Object.values(groupedItems); // Convert object to array
  

      // Calculate grand total
    const grandTotal = groupedItemsArray.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);


  return (
    <div className='AddToCart'>
      <div className="wrapper">
        <span onClick={() => setCartOpen(false)} className="close-btn">x</span>

        <div className="cart-header">
          <h2>Your Cart</h2>
          <p>Total Items: {cart.length}</p>
        </div>

        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          groupedItemsArray.map((item) => (
            <div key={item.id} className="cart-item">
              <div className='img-title'>
                <img src={item.image} alt="" />
                <div className='title'>{item.title}</div>
              </div>
              <div className='price-qty'>
                <div className='price'>Price: ${item.price}</div>
                <div className='qty'>Quantity: {item.quantity} </div>
                <div className='total'>Total: ${(item.price * item.quantity).toFixed(2)}</div>
              </div>
            </div>
          ))
        )}
        <div className="cart-footer">
              <h3>Total Bill: ${grandTotal.toFixed(2)}</h3>
              <button>Proceed to pay</button>
        </div>
      </div>
    </div>
  );
}
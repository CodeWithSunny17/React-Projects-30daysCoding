import React from "react";
import "./navbar.css";
import '@fortawesome/fontawesome-free/css/all.min.css'

export default function Navbar({cart, setCartOpen}) {
  console.log()
  return (
    <div className="navbar">
      <div className="brand">Amazon.in</div>
      <div className="cart" onClick={()=>{setCartOpen(true)}}>
      <i className="fa-solid fa-cart-shopping icon"></i>
      <span>{cart.length}</span>
      </div>
    </div>
  );
}

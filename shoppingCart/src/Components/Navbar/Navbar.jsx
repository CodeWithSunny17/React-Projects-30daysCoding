import React from "react";
import "./navbar.css";
import '@fortawesome/fontawesome-free/css/all.min.css'

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="brand">Amazon.in</div>
      <div className="cart">
      <i className="fa-solid fa-cart-shopping icon"></i>
      <span>2</span>
      </div>
    </div>
  );
}

import React from "react";
import "./card.css";

export default function Card(products, handleClick) {
  return (
    <div className="card">
      <div className="image">
        <img src={products.image} alt="" />
      </div>
      <div className="desc">
        <span className="title">{products.title}</span>
        <span className="price">${products.price}</span>
        <span className="description">{products.description}</span>
        <button onClick={()=>handleClick(products.key)}>Add to Cart</button>
      </div>
    </div>
  );
}

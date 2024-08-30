import React from "react";
import "./card.css";

export default function Card(response) {
  return (
    <div className="card">
      <div className="image">
        <img src={response.image} alt="" />
      </div>
      <div className="desc">
        <span className="title">{response.title}</span>
        <span className="price">${response.price}</span>
        <span className="description">{response.description}</span>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

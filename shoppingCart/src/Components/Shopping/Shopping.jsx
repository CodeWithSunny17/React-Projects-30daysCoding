import React from "react";
import Card from "../Card/Card";
import { useState, useEffect } from "react";
import "./shopping.css";

export default function Shopping() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Ensure loading is set to false after data is fetched
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="shopping">
      <span className="searchResults">
        Search Result: {products.length} items
      </span>

      <div className="wrapper">
        {products.map((products) => {
          return (
            <Card
              title={products.title}
              key={products.id}
              image={products.image}
              price={products.price}
              description={products.description}
            />
          );
        })}
      </div>
    </div>
  );
}

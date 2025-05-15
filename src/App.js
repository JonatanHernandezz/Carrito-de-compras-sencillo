import "./styles.css";

import React, { useState } from "react";
import ProductList from "./componentes/ProductList";
import Cart from "./componentes/Cart";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]); //esto es para agregar el producto al carrito
  };

  return (
    <div className="App">
      <h1>carrito de compras</h1>
      <ProductList addToCart={addToCart} />
      <Cart cart={cart} setCart={setCart} />
    </div>
  );
}

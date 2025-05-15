import React from "react";
import ProductItem from "./ProductItem";

const products = [
  { id: 1, name: "Camisa", price: 20 },
  { id: 2, name: "Audífonos", price: 50 },
  { id: 3, name: "Cuadro Personalizado", price: 100 },
];

const ProductList = ({ addToCart }) => {
  return (
    <div>
      <h2>Productos</h2>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;

import React from "react";

const Cart = ({ cart, setCart }) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const removeFromCart = (productToRemove) => {
    const index = cart.findIndex((item) => item.id === productToRemove.id);
    if (index !== -1) {
      const newCart = [...cart];
      newCart.splice(index, 1); // elimina solo un producto
      setCart(newCart);
    }
  };

  return (
    <div>
      <h2>Carrito</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
              <button onClick={() => removeFromCart(item)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default Cart;

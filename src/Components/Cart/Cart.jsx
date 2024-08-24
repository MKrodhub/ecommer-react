import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { carrito, precioTotal, borrarProducto, vaciarCarrito } =
    useContext(CartContext);

  if (carrito.length === 0) {
    return (
      <div>
        <h3>El carrito esta vacio</h3>
      </div>
    );
  }

  return (
    <div>
      <ul style={{ display: "flex", flexDirection: "column" }}>
        {carrito.map((productoCarrito) => (
          <li
            style={{ display: "flex", justifyContent: "space-around" }}
            key={productoCarrito.id}
          >
            <img width={120} src={productoCarrito.image} alt="" />
            <p>{productoCarrito.nombre}</p>
            <p>Cantidad: {productoCarrito.cantidad}</p>
            <p>Precio c/u: ${productoCarrito.precio}</p>
            <p>
              Precio parcial: $
              {productoCarrito.cantidad * productoCarrito.precio}
            </p>
            <button onClick={() => borrarProducto(productoCarrito.id)}>
              Borrar
            </button>
          </li>
        ))}
      </ul>

      <h2 style={{ display: "flex", justifyContent: "flex-end" }}>
        Precio Total: ${precioTotal()}
      </h2>
      <button onClick={vaciarCarrito}>Vaciar Carrito</button>
      <Link to="checkout">
        <button>Checkout</button>
      </Link>
    </div>
  );
};

export default Cart;

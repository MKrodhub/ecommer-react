import { TiShoppingCart } from "react-icons/ti";
import "../NavBar/navbar.css"
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext)

  let cantidad = cantidadTotal();

  return (

    <Link to="/cart" className="cartwidget">
      <p>{cantidad > 0 && cantidad}</p>
      <TiShoppingCart size={40} />
    </Link>
  )
}

export default CartWidget
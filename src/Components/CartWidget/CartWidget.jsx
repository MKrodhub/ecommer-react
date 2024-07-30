import { TiShoppingCart } from "react-icons/ti";
import "../NavBar/navbar.css"

export const CartWidget = () => {
  return (

    //Imagen carro y numero cde  items (puede ser otro componente, creo q al pedo)
    <div className="cartwidget">
      <p>3</p>
      <TiShoppingCart size={40} />
    </div>
  )
}

export default CartWidget
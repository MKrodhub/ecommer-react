import "./navbar.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

export const NavBar = () => {
  return (
    <nav className="navbar">
        <div className="list">
          <ul>
              <li>
                <Link to="/categoria/camisas">Camisas</Link>  
              </li>
              <li>
                <Link to="/categoria/camperas">Camperas</Link>  
              </li>
              <li>
                <Link to="/categoria/rompeVientos">Rompe Vientos</Link>  
              </li>
          </ul>
        </div>
        <div className="brand">
          <Link to="/">
          <p>Ecommerce Ropa</p>
          </Link>
        </div>

        <CartWidget />
    </nav>
  )
}

export default NavBar
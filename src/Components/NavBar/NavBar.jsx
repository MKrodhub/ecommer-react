import "./navbar.css"
import CartWidget from "../CartWidget/CartWidget"

export const NavBar = () => {
  return (
    <nav className="navbar">
        <ul>
            <li>Camperas</li>
            <li>Remeras</li>
            <li>Rompe vientos</li>
        </ul>

        <div className="brand">
          <p>Ecommerce Ropa</p>
        </div>

        <CartWidget />
    </nav>
  )
}

export default NavBar
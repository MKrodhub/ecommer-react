import "./navbar.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"
import logo from '../../../public/logo.jpg'
import CategoriasNav from "./CategoriasNav";

export const NavBar = () => {
  return (
    <nav className="navbar">

      <CategoriasNav />

      <div className="brand">
        <Link to="/">
          <img src={logo} alt="" className='logoImage'/>
        </Link>
      </div>

      <CartWidget />

    </nav>
  )
}

export default NavBar
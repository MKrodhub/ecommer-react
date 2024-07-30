import "./navbar.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"
import logo from '../../../public/logo.jpg'

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
            <img src={logo} alt="" className='logoImage'/>
          </Link>
        </div>

        <CartWidget />
    </nav>
  )
}

export default NavBar
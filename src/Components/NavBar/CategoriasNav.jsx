import React from 'react'
import { Link } from "react-router-dom"
import { FaTshirt } from "react-icons/fa";
import { GiUnderwearShorts } from "react-icons/gi";
import { IoMdFootball } from "react-icons/io";

const CategoriasNav = () => {
  return (
    <div className="category">
        <Link to="/categoria/upperbody" className="iconCategory">
          <FaTshirt size={40}/>
          <p>Upper Body</p>
        </Link>
        <Link to="/categoria/lowerbody" className="iconCategory">
          <GiUnderwearShorts  size={40}/>
          <p>Lower Body</p>
        </Link>
        <Link to="/categoria/accessories" className="iconCategory">
          <IoMdFootball size={40}/>
          <p>Accessories</p>
        </Link>
    </div>
  )
}

export default CategoriasNav
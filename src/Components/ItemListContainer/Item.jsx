import React from 'react'
import './Item.css'
import { Link } from "react-router-dom"

export const Item = ( {producto} ) => {
  return (
    <div key={producto.id} className='item'>
        <img width={150} src={producto.image} alt="" className='itemImage'/>
        <p className='nombreItem'>{producto.nombre}</p>
        <p className='precioItem'>${producto.precio}</p>
        <Link to={ "/detalle/"+ producto.id }>Ver detalles</Link>
    </div>
  )
}

export default Item
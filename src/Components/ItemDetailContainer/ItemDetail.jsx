import React from 'react'
import ItemCount from '../ItemCount/ItemCount.jsx'

export const ItemDetail = (  {producto} ) => {
  return (
    <div>
        <img src={producto.image} alt="" />
        <h2>{producto.nombre}</h2>
        <ItemCount />
    </div>
  )
}

export default ItemDetail
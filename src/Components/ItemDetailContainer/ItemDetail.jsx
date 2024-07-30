import React from 'react'

export const ItemDetail = (  {producto} ) => {
  return (
    <div>
        <img src={producto.image} alt="" />
        <h2>{producto.nombre}</h2>
    </div>
  )
}

export default ItemDetail
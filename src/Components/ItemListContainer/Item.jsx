import React from 'react'
import './Item.css'

export const Item = ( {producto} ) => {
  return (
    <div key={producto.id} className='item'>
        <img width={150} src={producto.image} alt="" className='itemImage'/>
        <p className='nombreItem'>{producto.nombre}</p>
        <p className='precioItem'>{producto.precio}</p>
    </div>
  )
}

export default Item
import React from 'react'
import ItemCount from '../ItemCount/ItemCount.jsx'
import '../ItemListContainer/Item.css'
import './itemdetail.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext.jsx'

const ItemDetail = ({ producto }) => {
  const  { agregarProducto } = useContext(CartContext)

  const agregarAlCarrito = (contador) => {
    const productoCarrito = {...producto, cantidad: contador};
    
    agregarProducto(productoCarrito)
  }
  
  return (
    <div>
      <h2>{producto.nombre}</h2>
      <div className='itemDetailContainer'>
        <div className='itemDetail'>
          <img src={producto.image} alt="" />
          <div className='ItemCounterContainer'>
            <ItemCount stock={producto.stock} agregarAlCarrito={agregarAlCarrito}/>
          </div>
        </div>
        <div className='itemDetailDescripcion'>
          <p>{producto.nombre}</p>
          <p>{producto.descripcion}</p>
        </div>
      </div>
    </div> 
  )
}

export default ItemDetail
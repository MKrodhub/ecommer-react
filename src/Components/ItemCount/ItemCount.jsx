import React from 'react'
import { useState } from 'react'
import "../ItemListContainer/Item.css"

const ItemCount = ({stock, agregarAlCarrito}) => {

    const [count, setCount] = useState(1)

    const aumentar = () => {
        if(count < stock) {
        setCount( count + 1 );
        }
    };

    const disminuir = () => {
        if(count > 1) {
            setCount( count - 1);
        }
    };


    return (
    <div className='itemCount'>
        <button onClick={disminuir}>-</button>
        <p className='itemCounter'>{count}</p>
        <button onClick={aumentar}>+</button>

        <button onClick={() => agregarAlCarrito(count)}>Agregar al carrito</button>
       
    </div>
  )
}

export default ItemCount
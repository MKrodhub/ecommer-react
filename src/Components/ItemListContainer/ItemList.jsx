import Item from "./Item"
import './Item.css'

const ItemList = ({ productos }) => {
    return (
      <div className="productGrid">
       { productos.map( (producto) => ( 
            <Item producto={producto} key={producto.id}/>
        ))}
      </div>
    )
  }
  
  export default ItemList
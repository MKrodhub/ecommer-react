import { useState, useEffect } from "react"
import obtenerProductos from "../../data/data.js"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ( {saludo} ) => {
  const [productos, setProductos] = useState([])

  const { idCategoria } = useParams()

  useEffect( () => {
    obtenerProductos()
      .then((dataProducto) => {
        if(idCategoria){
          const productosFiltrados = dataProducto.filter( (producto) => producto.categoria === idCategoria )
          setProductos(productosFiltrados)
        }else{
          setProductos(dataProducto);
        }
      })
      .catch( (error) => {
        console.log(error);
      })
      .finally( () => {
        console.log("COMPLETADO");
    })
  }, [idCategoria])
  
  return (
    <div>
        <ItemList productos={productos}/>      
    </div>
  )
}

export default ItemListContainer
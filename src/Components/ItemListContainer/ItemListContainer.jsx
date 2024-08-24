import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import {getDocs, collection, query, where} from 'firebase/firestore'
import db from "../../db/db.js"

const ItemListContainer = ( {saludo} ) => {
  const [productos, setProductos] = useState([]);
  const [estaCargando, setEstaCargando] = useState([]);
  const { idCategoria } = useParams();

  const getProducts = async() => {
    
    try{
      const productosRef = collection(db, "productos"); 
      const dataDb = await getDocs(productosRef);
      
      const data = dataDb.docs.map( (productDb) => {
        return { id: productDb.id, ...productDb.data()};
      });

      setProductos(data);
    
    } catch (error) {
      console.log(error);
    }
  };

  const getProductsByCategory = async() => {

    try{
      const productosRef = collection(db, "productos");
      const q = query(productosRef, where("categoria" , "==", idCategoria));
      const dataDb = await getDocs(q);

      const data = dataDb.docs.map( (productDb) => {
        return { id: productDb.id, ...productDb.data()};
    });

    setProductos(data);
    } catch (error) {

    }
  };


  useEffect( () => {
    if(idCategoria){
      getProductsByCategory();
    }else{
      getProducts();
    }

    setEstaCargando(false);
  }, [idCategoria]);
  
  return (
    <div>
        {estaCargando ? <div> CARGANDO </div> : <ItemList productos={productos}/>} 
    </div>
  )
}

export default ItemListContainer
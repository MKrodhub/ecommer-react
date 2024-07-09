import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <div>
      <NavBar />
      
      <ItemListContainer saludo = {"Bienvenido a mi Ecommerce."}/>
    </div>
  )
}

export default App

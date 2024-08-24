import './App.css'
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Cart from './Components/Cart/Cart'
import Checkout from './Components/Checkout/Checkout'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <ToastContainer />

        <Routes>   
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}/>
          <Route path="/detalle/:idProducto" element={<ItemDetailContainer/>}/>
          <Route path= "/cart" element={<Cart/>}/>
          <Route path= "/cart/checkout" element={<Checkout/>}/>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App

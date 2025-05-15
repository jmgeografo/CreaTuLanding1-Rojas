import './App.css'
import umbriaBanner from './assets/bannerUmbria.jpg'
import NavBar from './components/Header/NavBar'
import ItemListContainer from './pages/ItemListContainer'
import History from './pages/History'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import ItemDetailContainer from './pages/ItemDetailContainer'
import {Route, Routes } from 'react-router'
import Checkout from './pages/Checkout'

function App() {
    return (
    <>
      <div>
        <a href="https://crea-tu-landing1-rojas.vercel.app/" target="_blank">
          <img src={umbriaBanner} className="banner" alt="Umbría banner" />
        </a>
      </div>
      <h1>Umbría - Protégete del cambio climático</h1>
    
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:category" element={<ItemListContainer/>}/>
        <Route path="/history" element={<History/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="/checkout" element={<Checkout />}/>
        <Route path="*" element={<h1>Page not Found - Error 404</h1>}/>
      </Routes>
    </>
  )
}

export default App

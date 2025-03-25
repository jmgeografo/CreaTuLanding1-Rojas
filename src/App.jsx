import { useState } from 'react'
import umbriaBanner from './assets/bannerUmbria.jpg'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://umbria.cl" target="_blank">
          <img src={umbriaBanner} className="banner" alt="Umbría banner" />
        </a>
      </div>
      <h1>Umbría - Protégete del cambio climático</h1>
    
      <NavBar/>
      <ItemListContainer mensaje="¡Pronto tendremos cientos de productos pensados para ti!"/>
    </>
  )
}

export default App

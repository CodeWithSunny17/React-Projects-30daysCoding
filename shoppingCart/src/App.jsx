import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Shopping from './Components/Shopping/Shopping'
import Cart from './Components/Cart/Cart'

function App() {
  const [cart, setCart] = useState([]);

  const handleClick = (products) => {
    setCart([...cart, products]);
    console.log(cart)
  }

  return (
    <>
      <Navbar size={cart.length}/>
      <Shopping handleClick={handleClick}/>
    </>
  )
}

export default App

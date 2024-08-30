import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Shopping from './Components/Shopping/Shopping'

function App() {
  const [cart, setCart] = useState([]);

  const handleClick = (key) => {
    setCart(key.count)
    console.log(cart)
  }

  return (
    <>
      <Navbar/>
      <Shopping handleClick={handleClick(key)}/>
    </>
  )
}

export default App

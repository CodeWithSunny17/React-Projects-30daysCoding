import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Shopping from './Components/Shopping/Shopping'
import Cart from './Components/Cart/Cart'

function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] =useState(false);

  const handleClick = (products) => {
    setCart([...cart, products]);
    console.log(cart)
  }
  console.log(cartOpen)

  return (
    <>
      {cartOpen?<Cart setCartOpen={setCartOpen}/>:
      <div>
        <Navbar cart={cart} setCartOpen={setCartOpen}/>
        <Shopping handleClick={handleClick}/>
      </div>
      }
    </>
  )
}

export default App

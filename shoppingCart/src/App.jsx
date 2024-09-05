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
    // console.log(cart)
  }
  // console.log(cartOpen)

  return (
    <>
      <Navbar cart={cart} setCartOpen={setCartOpen}/>
      {cartOpen?<Cart setCartOpen={setCartOpen} cart={cart} setCart={setCart}/>:
      <div> 
        <Shopping handleClick={handleClick}/>
      </div>
      }
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Shopping from './Components/Shopping/Shopping'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Shopping/>
    </>
  )
}

export default App

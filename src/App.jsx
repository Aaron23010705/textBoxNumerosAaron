import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Textbox  from './components/Texto'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
    <p>Número 1</p> <input type='text'></input>
    <br></br>
    <p>Número 2</p> <input type='text'></input>

<Textbox/>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Textbox  from './components/Texto'
import Calculadora from './components/calculadora/calculadora'
import Todo from './components/toDo/toDo'
import Registro from './components/Registro/Registro'

function App() {
  return (

   <>
        <h1>Hook UseState</h1>

    <Calculadora/>
    <Todo/>
    <Registro/>

    </>
  )
}

export default App

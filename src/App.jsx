import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Textbox  from './components/nav'
import Calculadora from './pages/calculadora/calculadora'
import Todo from './pages/toDo/toDo'
import Registro from './pages/Registro/Registro'
import Aaron from "./pages/infoPersonal"
import { BrowserRouter as Router, Routes,Route } from 'react-router'
import Nav from './components/nav'
import Contact from './pages/contact'

function App() {
  return (

   <>
    <Router>
<Nav/>
    <Routes>
<Route path='/calculadora' element={<Calculadora/>}/>
<Route path='/Todo' element={<Todo/>}/>
<Route path='/Registro' element={<Registro/>}/>
<Route path='/Aaron' element={<Aaron
  nombre={'Aarón Edgardo García Romero'}
  edad={18}
  especialidad={"Software"}
  dirección={"Mexicanos"}
  código = {"20230406"}
/>}/>
<Route path='/Contact' element={<Contact/>}/>

    
    </Routes>
</Router>

  
   
   </>
  )
}

export default App

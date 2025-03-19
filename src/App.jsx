import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Textbox  from './components/Texto'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{
      backgroundColor: '#ffffff',
      border: '1px solid #ccc',
      borderRadius: '5px',
      padding: '20px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      maxWidth: '300px',
      margin: 'auto',
      textAlign: 'center'
    }}>
      <h2 style={{ color: '#333' }}>Ingrese los Números</h2>

      <p style={{ margin: '10px 0', color: '#555' }}>Número 1</p>
      <input type='text' style={{
        width: '100%',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxSizing: 'border-box',
        marginBottom: '10px'
      }} />

      <p style={{ margin: '10px 0', color: '#555' }}>Número 2</p>
      <input type='text' style={{
        width: '100%',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxSizing: 'border-box',
        marginBottom: '10px'
      }} />

      <button style={{
        width: '100%',
        padding: '10px',
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>Enviar</button>
    </div>

  )
}

export default App

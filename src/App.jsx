import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  console.log("?: ", `${import.meta.env.VITE_BASE_URL}`)

  return (
    <>

      <div id='logoz'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>👀</h1>

      <h2>-{import.meta.env.VITE_IMPORTANT_VARIABLE_MAYBE_AN_API_KEY_LOL}-</h2>

      
    </>
  )
}

export default App

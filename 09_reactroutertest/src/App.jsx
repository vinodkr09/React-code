import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import { Router } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation/>
      <Router/>
    </>
  )
}

export default App

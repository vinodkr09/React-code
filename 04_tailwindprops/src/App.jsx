import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    username: "hitesh",
    age: 21
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-5 rounded-xl mb-5 '>Tailwind Test</h1>
      <Card username= "chai aur code" btnText="Click me"/>
      <Card username= "Saket Anand" btnText="visit me"/>
      <Card username= "Chiks" btnText="Love me"/>
      
    </>
  )
}

export default App

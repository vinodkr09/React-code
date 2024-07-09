import { useState } from 'react'   // here usestate is one type hooks
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let Counter = 15

  const [Counter, setCounter] = useState(15) // "setCounter" is a function which is responsible for updating "counter" variable and it is initilize with 15

  const addValue = () => {
    //Counter = Counter + 1;

    setCounter(Counter + 1);
  }

  const removeValue = () => {
    setCounter(Counter - 1)
  }
  
  return (
    <>
      <h1>Chai aur code </h1>
      <h2>Counter value:{Counter}</h2>

      <button onClick={addValue}> Add value</button>
      <br/>
      <button onClick={removeValue}>Remove value</button>
      <p>footer:{Counter}</p>
    </>
  )
}

export default App

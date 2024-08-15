import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

function App() {

  return (
    <>
      <p>Learn about Redux toolkit</p>
      <AddTodo/>
      <Todo/>
    </>
  )
}

export default App

import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {

  //useState hooks
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setpassord] = useState("")

  //useRef Hooks
  const passwordRef = useRef(null)

  // useCallback hooks
  const passwordGenertor = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmniopqrstuvwxyz"
    if(numberAllowed){
      str =+ "0123456789"
    }
    if(charAllowed){
      str += "!@#$%^&*()"
    }

    for(let i =1; i <=length; i++){
      let char = Math.floor(Math.random() * str.length + 1)  //this is used to genertae a Random number
      pass += str.charAt(char)
    }

    setpassord(pass)

  }, [length, numberAllowed, charAllowed,setpassord]) // usecallback ke andar 2 chiz pass hota hai ek function aur dusra dependencies joki array form me hota hai
  

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();   // ? means optionally value select karwa rahe hai
    passwordRef.current?.setSelectionRange(0,999);
    window.navigator.clipboard.writeText(password)
     
  }, [password])

 
  // useEffect Hooks
useEffect(()=>{
  passwordGenertor()
}, [length, numberAllowed, charAllowed, passwordGenertor])


  return (
    <>
     <div className='w-full max-w-md max-auto shadow-md rounded-lg px-lg my-8 text-orange-500 bg-gray-700'>

      <h1 className='text-white text-center my-3 py-5'>Password Generator </h1>

      <div className='flex shadow rounded-xl overflow-hidden mb-4 px-10 py-6'>
        <input
         type="text" 
         value={password}
         className='outline-none w-full py-2 px-3'
         placeholder="Password"
         readOnly
         ref={passwordRef}
         />
       <button 
       onClick={copyPasswordToClipboard}
       className='outline-none bg-blue-700 text-white px-3 py-1 shrink-0'>copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
           type="range" 
           min={6}
           max={100}
           value={length}
           className='cursor-pointer'
           onChange={(e) => {setLength(e.target.value)}}
           />
           <label>length: {length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={() =>{
            setNumberAllowed((prev) => !prev) // means true hai to false ho jayega and false hai to true ho jayega
          }}
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked={charAllowed}
          id='characterInput'
          onChange={() =>{
            setcharAllowed((prev) => !prev)  // means true hai to false ho jayega and false hai toh true ho jayega
          }}
          />
          <label htmlFor='numberInput'>Characters</label>
        </div>
      
        
      </div>
     </div>
    </>
  )
}

export default App
   
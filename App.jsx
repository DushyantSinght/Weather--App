import { useState } from 'react'
import './App.css'
import Weatherapp from './Weatherapp';

function App() {
  
  const [count, setCount] = useState(0)
  let hello = () =>{
    console.log("hello");
  }

  return (
    <>
    <Weatherapp/>
    </>
  )
}

export default App

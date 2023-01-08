import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
// import TODO from './Todo'//Single Component  
import Parent from './Component_Version/ParentComponent'

function App() {

  const [count, setCount] = useState(0)

  return (
      <Parent/>

  )
}

export default App

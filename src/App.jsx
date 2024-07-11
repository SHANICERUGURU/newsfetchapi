import { useState } from 'react'
import './App.css'
import NewsContainer from './components/newscontainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NewsContainer/>
    </>
  )
}

export default App

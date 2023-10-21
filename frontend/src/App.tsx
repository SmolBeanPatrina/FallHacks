import { useState } from 'react'
// import imgsrc from '[./assets]/path'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  )
}

export default App
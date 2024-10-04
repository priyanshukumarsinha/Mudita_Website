import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nabvar from './components/Nabvar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='relative bg-bgColor h-screen'>
      <div className='sticky top-0 left-0'>
        <Nabvar/>
      </div>
    </div>
  )
}

export default App

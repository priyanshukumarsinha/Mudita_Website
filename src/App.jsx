import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nabvar from './components/Nabvar'
import { Logo } from './assets'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='relative bg-bgColor'>
      <div className='sticky top-0 left-0'>
        <Nabvar/>
        <div className='flex px-20 items-center h-[calc(85vh)]'>
          <div className='w-1/2'>
            <h1
            className='text-4xl text-primaryColor pb-5'
            >
              The Joy In Celebrating Other's Happiness And Sucess!
            </h1>
            <p
            className='text-secondaryColor py-5'
            >
              Our Social Responsibility Cell fosters positive impact through numerous initiatives and volunteer opportunities
            </p>
            <button
            className='bg-primaryColor text-black font-semibold py-2 px-4 rounded-full'
            >
              Know More
            </button>
          </div>
          <div className='w-1.2'>
            <div className='flex items-center'>
              <img
              src={Logo}
              alt='react logo'
              className='h-[60%] w-[60%] ml-auto'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

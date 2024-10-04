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
        <div className='flex px-8 sm:px-10 md:px-20  items-center h-[calc(85vh)] md:h-[calc(70vh)]'>
          <div className=' w-full md:w-1/2'>
            <h1
            className='text-4xl text-primaryColor pb-5'
            >
              The Joy In Celebrating Other's Happiness And Sucess!
            </h1>
            <p
            className='text-secondaryColor py-5 italic'
            >
              Our Social Responsibility Cell fosters positive impact through numerous initiatives and volunteer opportunities
            </p>
            <button
            className='bg-primaryColor text-black font-semibold py-2 px-4 rounded-full'
            >
              Know More
            </button>
          </div>
          <div className='hidden md:block w-1.2'>
            <div className='flex items-center'>
              <img
              src={Logo}
              alt='react logo'
              className='h-[60%] w-[60%] ml-auto'
              />
            </div>
          </div>
        </div>
       <div className="relative">
       <div className='p-5 bg-primaryColor h-[calc(15vh)] hidden md:block'>

        </div>
        <div className='p-5 bg-white md:absolute md:-top-8 lg:-top-12 flex-wrap w-full md:w-[calc(100%-160px)] md:mx-20 text-center '>
          <h1 className='pb-2'>Our Collaborators</h1>
          <div className='flex justify-center gap-10 items-center '>
            <img
            src={reactLogo}
            alt='react logo'
            className='h-[50px] w-[50px]'
            />
            <img
            src={viteLogo}
            alt='vite logo'
            className='h-[50px] w-[50px]'
            />
            <img
            src={Logo}
            alt='mudita logo'
            className='h-[50px] w-[50px]'
            />
          </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default App

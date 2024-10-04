import React from 'react'
import { Logo as LogoPhoto } from '../assets'


const Logo = () => {
  return (
    <div className='flex items-center gap-2'>
      <img src={LogoPhoto} alt='logo' className='w-10 h-10'/>
      <h1 className='font-bold text-white'>Mudita</h1>
    </div>
  )
}

export default Logo
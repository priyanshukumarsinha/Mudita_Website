import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import Button_Transparent from './Button_Transparent'

const Nabvar = () => {
  return (
    <div className='w-full flex justify-between bg-bgColor px-20 py-6 items-center border-b-4 border-primaryColor'>
        <Logo />
        <Menu />
        <Button_Transparent />
    </div>
  )
}

export default Nabvar
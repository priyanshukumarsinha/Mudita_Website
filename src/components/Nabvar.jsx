import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import Button_Transparent from './Button_Transparent'
import { MdMenu } from "react-icons/md";

const Nabvar = () => {
  const [showMenu, setShowMenu] = React.useState(false)
  return (
    <div>
        <div className='w-full hidden md:flex justify-between bg-bgColor px-20 py-6 items-center border-b-4 border-primaryColor'>
          <Logo />
          <Menu />
          <Button_Transparent />
      </div>
      <div className='w-full flex justify-between md:hidden bg-bgColor px-6 py-6 items-center border-b-4 border-primaryColor'>
        <Logo />
        <MdMenu 
        className='text-white text-3xl cursor-pointer'
        onClick={() => setShowMenu(!showMenu)}
        />
        
      </div>
      <div className='text-center '>
          {
            showMenu && <><Menu phone={true}/> <Button_Transparent/></>
          }
        </div>
    </div>
  )
}

export default Nabvar
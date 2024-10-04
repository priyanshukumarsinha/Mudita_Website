import React from 'react'

const Menu = ({phone}) => {
  
  let menu = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'About',
      link: '/about'
    },
    {
      name : 'Events',
      link: '/events'
    },
    {
      name : 'Stories',
      link: '/stories'
    },
    {
      name : 'Blogs',
      link: '/blogs'
    }
  ]
  return (
    <div>
      {
        !phone && 
        <ul className='flex gap-10 text-white text-[14px]'>
        {
          menu && menu.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.link}>{item.name}</a>
              </li>
            );
          })
        }
      </ul>
      }
      {
        phone && 
        <ul className='flex flex-col gap-10 my-10 text-white text-[14px]'>
        {
          menu && menu.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.link}>{item.name}</a>
              </li>
            );
          })
        }
      </ul>
      }
    </div>
  )
}

export default Menu
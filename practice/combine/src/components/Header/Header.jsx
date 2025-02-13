import React, { useId } from 'react'
import {NavLink} from 'react-router'

function Header() {

  const navItems = [
    {
      name: 'Home',
      to: '/'
      },
    {
      name: 'Login',
      to: '/Login'
    },
    {
      name: 'Signup',
      to: '/Signup'
    },
    {
      name: 'About',  
      to: '/About'    
    },
    {
      name: 'Contact',  
      to: '/Contact'    
    },
  ]

  return (
    <header className='w-full'>
      <nav className='flex justify-around items-center h-14 bg-blue-900'>
        <div className="">LOGO</div>
        <div className="">
        <ul className='flex flex-row justify-evenly '>
        {navItems.map((value) => 
          <li key={useId()}>
            <NavLink
            to={value.to}
            className={({isActive})=>`py-2 pr-5 pl-3 duration-200 ${isActive ? "text-orange-500" : "text-gray-100"} hover:text-orange-500`}>
              {value.name}
            </NavLink>
          </li>
        )}
      </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
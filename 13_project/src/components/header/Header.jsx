import React from 'react'
import {Container, Logo, LogOutBtn} from '../index'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: 'Login',
      slug: "/login",
      active: !authStatus
    },
    {
      name: 'Signup',
      slug: "/signup",
      active: !authStatus
    },
    {
      name: 'All post',
      slug: "/all-post",
      active: authStatus
    },
    {
      name: 'Add-post',
      slug: "/add-post",
      active: authStatus
    }
  ]
  return (
  <header className='py-3 shado bg-gray-500'>
    <Container/>
    <nav className='flex'>
      <div className="mr-4">
        <Link to='/'>
          <Logo width='70px'/>
        </Link>
      </div>
      <ul className="flex ml-auto">
      {navItems.map((items) => 
        items.active ? (
          <li key={items.name}>
            <button
            className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
            onClick={() => navigate}>{items.slug}</button>
          </li>
        ) : null
      )}
      {authStatus && (
        <li>
          <LogOutBtn/>
        </li>
      )}
      </ul>
    </nav>
  </header>
      )
  }

export default Header
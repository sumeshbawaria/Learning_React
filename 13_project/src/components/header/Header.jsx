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
      slug: "/Login",
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
    },
  ]

  return (
    <header className='py-3 shadow bg-blue-400 rounded-t-xl'>
      <Container>
        <nav className='flex items-center justify-evenly
        '>
          <div className='mr-4 '>
            <Link to='/'>
              <Logo width='70px'   />

              </Link>
          </div>
          <ul className='flex justify-between items-center'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='inline-bock px-4 py-1 mx-2 duration-200 hover:bg-blue-100 rounded-full'
                >{item.name}</button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li>
                <LogOutBtn />
              </li>
            )}
          </ul>
        </nav>
        </Container>
    </header>
  )
}

export default Header
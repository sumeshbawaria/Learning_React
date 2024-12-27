import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logOut } from '../../store/authSlice'


function LogoBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logOut().then(() => {
            dispatch(logOut())
        })
    }
  return (
    <button
    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>LogOut</button>
  )
}

export default LogoBtn 
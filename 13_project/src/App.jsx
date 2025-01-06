import React, { useEffect,useState } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import {logout,login} from './store/authSlice'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {

  //loading status
  
  const [loading, setloading] = useState(true)
  const dispath = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispath(login({userData}))
      }
      else{
        dispath(logout())
      }
    })
    .finally(() => setloading(false))
  },[])

  return !loading ? (
    <div className='h-fit flex flex-wrap content-between bg-gray-200 rounded-xl'>
      <div className='w-full block'>
        <Header/>
        <main className='pt-5'>
          TODO: <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  ) : null
}

export default App
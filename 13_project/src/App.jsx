import React, { useEffect,useState } from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import {logOut,login} from './store/authSlice'
import { Footer, Header } from './components'


function App() {

  //loading status
  
  const [loading, setloading] = useState(true)
  const dispath = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispath()
      }
      else{
        dispath(logOut())
      }
    })
    .finally(() => setloading(false))
  },[])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between '>
      <div className='w-full block'>
        <Header/>
        <main>
          {/* <Outlet/> */}
        </main>
        <Footer/>
      </div>
    </div>
  ) : null
}

export default App
import React from 'react'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import { Outlet } from 'react-router-dom'       // used to change only select section

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>       {/*now we have to tell in index file that we are using a layout and giving everything inside it*/} 
    <Footer/>
    </>
  )
}

export default Layout
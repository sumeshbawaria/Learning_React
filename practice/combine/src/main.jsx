import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './Layout.jsx'
import {Home,Login,Signup,About,Contact} from './index.js'

const router = createBrowserRouter([
  {
    path: '/',
    element : <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>,
      },
      {
        path: "Login",
        element: <Login/>,
      },
      {
        path: "Signup",
        element: <Signup/>,
      },
      {
        path: "About",
        element: <About/>,
      },
      {
        path: "Contact",
        element: <Contact/>,
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

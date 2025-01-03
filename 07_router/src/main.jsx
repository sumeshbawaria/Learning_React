import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import About from './components/about/About.jsx'
import Layout from './layout.jsx'
import Home from './components/home/home.jsx'
import Contact from './components/contact/contact.jsx'
import User from './components/User/User.jsx'
import Github,{githubInfoLoader} from './components/Github/Github.jsx'

// it take method

// const router= createBrowserRouter([  
//   {
//     path: '/',        // '/' is a top level element nesting is happening inside it that's we use element
//     element: <Layout/>,   // we add children because more childrens needs to be added 
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "About",
//         element: <About/>
//       },
//       {
//         path: "Contact",
//         element: <Contact />
//       }
//     ]     
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} >
        <Route path='sumesh' />
      </Route>
      <Route path='contact' element={<Contact/>} />
      <Route path='user/:userid' element={<User/>} />
      <Route 
        loader={githubInfoLoader}
        path='github' 
        element={<Github/>} 
      />
      
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>   {/* //this component take prop router */}
  </StrictMode>,
)

import React, { useEffect } from 'react'
import AddTodo from './component/addTodo'
import Todos from './component/Todos'

function App() {  
  return (
    <>
    <h1 className='text-center'>Redux toolkit</h1>
    <AddTodo/>
    <Todos/>
    </>
  )
}

export default App
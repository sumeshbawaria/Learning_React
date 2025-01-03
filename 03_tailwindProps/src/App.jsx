import { useState } from 'react'
import './App.css'
import Card from './componenet/card'

function App() {

  let myObj = {
    username: "sumesh",
    age: 21
  }
  let newArr = [1,2,3]

  return (
    <>
    <h1 className='bg-orange-400 p-4 rounded-xl'>Tailwind test</h1>
    
    <Card username="Sumesh Bawaria" />
    <Card username="new card"/>
    </>
  )
}

export default App

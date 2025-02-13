import { useState } from 'react'  // for hooks
import './App.css'

function App() {

  let [counter, setCounter] = useState(2)          // this hooks use for change state in ui

  // let counter = 15

  const addValue = () => {
    
    // counter = counter + 1       //  ui updation
    // setCounter(counter)

    if(counter < 20)
    setCounter(counter + 1)
  }
  const removeValue = () =>{
    if(counter > 0){
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>

      <br />
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App

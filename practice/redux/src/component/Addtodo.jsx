import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addTodo } from '../feature/todoSlice'


function Addtodo() {
  const todos = useSelector(state => (state.todos))
  const [input, setInput] = useState('')
  const dispatch = useDispatch()
  // console.log(typeof(todos));

  const addHandler = (e) => {
    e.preventDefault(); 

    if(input.trim() !== '' ){
      const checkTodo = todos.find((value) => value.text === input.trim())
      console.log(checkTodo);
      
      if(!checkTodo){
        dispatch(addTodo(input));
        setInput('')
      }
    }    
  }

  return (
    <>
    <h1>Todo</h1>
      <form action="" onSubmit={addHandler}>

        <input type="text" 
        placeholder='Enter name...'
        value={input}
        onChange={(e) => setInput(e.target.value)}/>

        <button type='submit' className='bg-red-400'>Add</button>

      </form>
    </>
  )
}

export default Addtodo
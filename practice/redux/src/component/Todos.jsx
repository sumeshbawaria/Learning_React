import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { savedTodo, removeTodo } from '../feature/todoSlice'

function Todos() {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()


  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('data')) || []
    console.log(savedData);
    
    dispatch(savedTodo(savedData))
  }, [])

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(todos))
  }, [todos])
  
  return (
    <>
      <ul>
      {
        todos.length > 0 ? 
        (  
          todos.map((todo) => (
            <div  key={todo.id}className='flex m-2'>
              <li className='m-2'>{todo.text}</li>
              <button className='px-3 bg-red-600'
              
              onClick={() => dispatch(removeTodo(todo.id))}
              >clear</button>
            </div>
          ))
        )
        : 
        (
          <li>No data present</li>
        )
      }
      </ul>
    </>
  )
}

export default Todos
import React from 'react'
import TodoForm from './components/TodoForm'
import Todoitem from './components/Todoitem'

function App() {
  return (
    <Todoprovider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      
    </Todoprovider>
  )
}

export default App
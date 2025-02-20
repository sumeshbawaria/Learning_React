import { useContext, createContext } from 'react'

export const TodoContext = createContext({
  todos: [{
    id: 1,
    msg: "First todo",
    completed: false
  },
  {
    id: 2,
    msg: "second Todo",
    completed: false
  }
  ],
  addTodos: (todo) => { },
  removeTodos: (id) => { },
  updateTodos: (id, todo) => { },
  toggleComplete: (id) => { }
})

export const useTodo = () => {
  return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
import { createContext, useContext } from 'react'

const ToDoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "todo msg",
            complete: false
        }
    ],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { },
})

export const useTodo = () => {
    return useContext(ToDoContext)
}

export const TodoProvider = ToDoContext.Provider
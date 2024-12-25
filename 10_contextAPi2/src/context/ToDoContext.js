// context api doesn't build for big projects

import { createContext, useContext } from 'react'

const ToDoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false
        }
    ],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }
})

export const useTodo = () => {
    return useContext(ToDoContext)
}

export const Todoprovider = ToDoContext.Provider
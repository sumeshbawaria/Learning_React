import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        { id: 1, name: "sumesh" }
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo(state, action) {
            const todo = {
                id: nanoid(),
                name: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter((todos) => todos.id !== action.payload)
        },
        initiated(state, action) {
            state.todos = action.payload
        }
    }
})

export const { addTodo, removeTodo, initiated } = todoSlice.actions

export default todoSlice.reducer;
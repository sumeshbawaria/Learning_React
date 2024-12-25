import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [
        { id: 1, text: "Hello world" },
        { id: 2, text: "workout" }
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload.id);
            if (todo) {
                todo.text = text;
            }
        },
        // initializeTodo: (state, action) => {
        //     return action.payload;
        // }
    }
})

export const { addTodo, removeTodo, initializeTodo } = todoSlice.actions    // syntax

const reducer = todoSlice.reducer
export default reducer       // syntax
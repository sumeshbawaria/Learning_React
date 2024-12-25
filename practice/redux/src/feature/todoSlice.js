import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        { id: 1, text: "Workout" }
    ]
};

const todoSlice = createSlice(
    {
        name: 'todo',
        initialState,
        reducers: {
            addTodo: (state, action) => {
                const todo = { id: nanoid(), text: action.payload }
                state.todos.push(todo)
            },
            removeTodo: (state, action) => {
                console.log(action.payload);

                state.todos = state.todos.filter((todo) => todo.id !== action.payload)
            },
            savedTodo: (state, action) => {
                state.todos = action.payload
            }
        }
    }
)

export const { addTodo, removeTodo, savedTodo } = todoSlice.actions

const reducer = todoSlice.reducer

export default reducer;
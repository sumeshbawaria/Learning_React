import { configureStore } from '@reduxjs/toolkit'

import reducer from '../feature/todo/todoSlice'

export const store = configureStore({
    reducer: reducer
})
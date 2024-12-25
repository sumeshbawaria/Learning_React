import { configureStore } from '@reduxjs/toolkit'

import reducer from '../feature/todoSlice'

export const store = configureStore({
    reducer: reducer
})
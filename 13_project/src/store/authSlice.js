import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null
}
// for knowing whether user is authenticated or not

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logOut: (state) => {
            state.status = false;
            state.userData = null;
        }
    }
})

export const { login, logOut } = authSlice.actions;

export default authSlice.reducer
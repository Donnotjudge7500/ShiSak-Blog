import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: false,
    userData: null,
}

export const authenticationSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (status) => {
            status.status = false;
            status.userData = null;
        }
    }
}) 

export const { login, logout } = authenticationSlice.actions;
export default authenticationSlice.reducer;
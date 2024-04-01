import { configureStore } from '@reduxjs/toolkit';
import authenticationSlice from './features/authenticationSlice.js';
import postSlice from './features/postSlice.js';
import deleteSlice from './features/deleteSlice.js';   
const store = configureStore({
    reducer: {
        authenticationSlice: authenticationSlice,
        postSlice: postSlice,
        deleteSlice: deleteSlice,
    }
})

export default store;
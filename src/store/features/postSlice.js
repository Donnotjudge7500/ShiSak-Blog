import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    allPost : []
}

export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        getAllThePost: (state, action) => {
            state.allPost = action.payload;
        }
    }
})

export const { getAllThePost } = postSlice.actions;
export default postSlice.reducer;
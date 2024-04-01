import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
    
}

export const deleteSlice = createSlice({
    name: "deleteSlice",
    initialState,
    reducers: {
        openDialogBox: (state) => {
            state.isOpen = true;
        },
        closeDialogBox: (state) => {
            state.isOpen = false;
        }
    }
})

export const { openDialogBox, closeDialogBox } = deleteSlice.actions
export default deleteSlice.reducer;
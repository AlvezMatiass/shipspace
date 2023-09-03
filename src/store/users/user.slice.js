import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: null
}

const userSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        updateData: (state, action) => {
            state.data = action.payload
        },
    }
})

export const { updateData } = userSlice.actions;

export default userSlice.reducer;
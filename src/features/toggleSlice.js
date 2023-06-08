import { createSlice } from "@reduxjs/toolkit";

// Slice for User Component for grid and list view

const initialState = {
    toggle: 'horizontal',
}

const toggleSlice = createSlice({
    name: 'toggle',
    initialState,
    reducers: {
        setHorizontal: (state) => {
            state.toggle = 'horizontal'
        },
        setVertical: (state) => {
            state.toggle = 'vertical'
        },
    }
})

export default toggleSlice.reducer

export const { setHorizontal, setVertical } = toggleSlice.actions
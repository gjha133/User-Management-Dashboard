import { createSlice } from "@reduxjs/toolkit";

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

// console.log(toggleSlice)

export default toggleSlice.reducer

export const { setHorizontal, setVertical } = toggleSlice.actions
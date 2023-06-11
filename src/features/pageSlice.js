import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentPage: 1,
    usersPerPage: 12,
}

const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        nextPage: (state) => {
            state.currentPage = state.currentPage + 1;
        },
        prevPage: (state) => {
            state.currentPage = state.currentPage - 1;
        },
        gotToPage: (state, action) => {
            state.currentPage = action.payload;
        }
    }
})


export default pageSlice.reducer
export const { nextPage, prevPage, gotToPage } = pageSlice.actions
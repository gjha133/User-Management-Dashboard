import { configureStore } from "@reduxjs/toolkit";
import userDetail from "../features/userDetailSlice";
import toggleSlice from "../features/toggleSlice";
import pageSlice from "../features/pageSlice";

export const store = configureStore({
    reducer: {
        app: userDetail,
        toggle: toggleSlice,
        page: pageSlice
    }
})
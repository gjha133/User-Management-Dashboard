import { configureStore } from "@reduxjs/toolkit";
import userDetail from "../features/userDetailSlice";
import toggleSlice from "../features/toggleSlice";

export const store = configureStore({
    reducer: {
        app: userDetail,
        toggle: toggleSlice,
    }
})
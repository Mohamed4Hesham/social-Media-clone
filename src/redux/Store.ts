import { configureStore } from "@reduxjs/toolkit";
import { userSliceReducer } from "./slices/UserSlice";

export const Store = configureStore({
    reducer: {
        user : userSliceReducer
    },
});


export type AppDispatch = typeof Store.dispatch;
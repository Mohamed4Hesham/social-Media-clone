import { configureStore } from "@reduxjs/toolkit";
import { userSliceReducer } from "./slices/UserSlice";
import { PostSliceReducer } from "./slices/PostsSlice";

export const Store = configureStore({
    reducer: {
        user : userSliceReducer,
        posts : PostSliceReducer,
    },
});


export type AppDispatch = typeof Store.dispatch;
export type RootState = ReturnType<typeof Store.getState>;

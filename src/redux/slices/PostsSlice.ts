import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";



export const LoggedUserPosts = createAsyncThunk('postsSlice/getPosts', async (id?: string) => {
    if (!id) {
        throw new Error("User ID is required to fetch posts");
    }

    const response = await fetch(`https://linked-posts.routemisr.com/users/${id}/posts`, {
        method: 'GET',
        headers: {
            token: Cookies.get('SocialMediaToken') || ''
        } as HeadersInit
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch posts: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
});


const PostSlice = createSlice({
    name:'postSlice',
    initialState:{
        posts:[],

    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(LoggedUserPosts.fulfilled,(state,action)=>{
            console.log(action);
            console.log(state);
        })
    }
})
export const PostSliceReducer = PostSlice.reducer;
export const postActionReducer = PostSlice.actions;

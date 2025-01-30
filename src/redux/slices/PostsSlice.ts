import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export const LoggedUserPosts = createAsyncThunk('postsSlice/getPosts',async()=>{
    const Response = await fetch('Posts',{
        method:'GET',
        headers:{
            token : Cookies.get('SocialMediaToken')
        }as HeadersInit
    })
    const data = await Response.json()
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
            state.posts = action.payload.posts
        })
    }
})
export const PostSliceReducer = PostSlice.reducer;
export const postActionReducer = PostSlice.actions;

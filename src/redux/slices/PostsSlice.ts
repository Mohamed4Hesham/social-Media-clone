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
        currentPage:0,
        limit:0,
        numberOfPages:0,
        total:0,
        Posts:[
            {
                id:'',
                body:'',
                user: {
                    id: '',
                    name: '',
                    photo: ''
                },
                createdAt: '',
                comments: [],
            }
        ],

    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(LoggedUserPosts.fulfilled,(state,action)=>{
            state.currentPage = action.payload.currentPage;
            state.limit = action.payload.limit;
            state.numberOfPages = action.payload.numberOfPages;
            state.total = action.payload.total;
            state.Posts = action.payload.posts
        })
    }
})
export const PostSliceReducer = PostSlice.reducer;
export const postActionReducer = PostSlice.actions;

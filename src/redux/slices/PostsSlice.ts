import { createPostPayload, createPostResponse } from "@/interfaces/createPost";
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



export const AddPost = createAsyncThunk<createPostResponse, createPostPayload>('postsSlice/createPost', async (payload, { rejectWithValue }) => {
    try {
        const formData = new FormData();
        if (payload.body) formData.append("body", payload.body);
        if (payload.image) formData.append("image", payload.image);

        const Response = await fetch('https://linked-posts.routemisr.com/posts', {
            method: 'POST',
            headers: {
                token: Cookies.get('SocialMediaToken')
            } as HeadersInit,
            body: formData
        });

        if (!Response.ok) {
            throw new Error('Failed to create post');
        }

        const data: createPostResponse = await Response.json();
        return data;

    } catch (error) {
        if (error instanceof Error) {
            return rejectWithValue(error.message);
        } else {
            return rejectWithValue('An unknown error occurred');
        }
    }
});

const PostSlice = createSlice({
    name:'postSlice',
    initialState:{
        posts:[],
        body: "",
        image: null,
        },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(LoggedUserPosts.fulfilled,(state,action)=>{
            state.posts = action.payload.posts
        })
        builder.addCase(AddPost.fulfilled,(state,action)=>{
            console.log(state);
            console.log(action);        })
        builder.addCase(AddPost.rejected,(state,action)=>{
            console.log(state);
            console.log(action);
        })
    }
})
export const PostSliceReducer = PostSlice.reducer;
export const postActionReducer = PostSlice.actions;

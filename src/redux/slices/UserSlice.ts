import { UserType } from "@/interfaces/UserSlice";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const handleSignup = createAsyncThunk( 'user/handleSignup' , async (FormValues:UserType) => {
        const Response = await fetch(`https://linked-posts.routemisr.com/users/signup` , {
            method:'POST',
            body:JSON.stringify(FormValues),
            headers:{'Content-Type':'application/json'},
        });
        const data = await Response.json();
        return data;
})


const userSlice = createSlice({
    name:'user',
    initialState:<UserType>{
        name:'',
        email:'',
        password:'',
        rePassword:'',
        dateOfBirth:'',
        gender:''

    },
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(handleSignup.fulfilled,(state,action)=>{
            console.log(state);
            console.log(action);
            
        })
        builder.addCase(handleSignup.rejected,(state,action)=>{
            console.log(state);
            console.log(action);
        })
        builder.addCase(handleSignup.pending,(state,action)=>{
            console.log(state);
            console.log(action);
        })
        
    }
    }
)

export const userSliceReducer = userSlice.reducer;
export const userSliceActions = userSlice.actions;

import { ChangePasswordRes } from "@/interfaces/changePasswordRes";
import { LoggedUserData } from "@/interfaces/getLoggedUserData";
import { LoginForm } from "@/interfaces/LoginForm";
import { LoginRes } from "@/interfaces/LoginResponse";
import { RegisterForm, RegisterRes } from "@/interfaces/RegisterRes";
import { resetPasswordPayload } from "@/interfaces/resetPassword";
import { UserType } from "@/interfaces/UserSlice";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie'
const token = Cookies.get("SocialMediaToken");
export const handleSignup = createAsyncThunk< RegisterRes , RegisterForm>(
  "user/handleSignup",
  async (FormValues: RegisterForm) => {
    const Response = await fetch(
      `https://linked-posts.routemisr.com/users/signup`,
      {
        method: "POST",
        body: JSON.stringify(FormValues),
        headers: { "Content-Type": "application/json" },
      }
    );
    const data:RegisterRes = await Response.json();
    return data;
  }
);

export const handleSignin = createAsyncThunk<LoginRes, LoginForm>(
  "user/handleSignin",
  async (loginValues: LoginForm) => {
    const Response = await fetch(
      `https://linked-posts.routemisr.com/users/signin`,
      {
        method: "POST",
        body: JSON.stringify(loginValues),
        headers: { "Content-Type": "application/json" },
      }
    );
    const data: LoginRes = await Response.json();
    return data;
  }
);

export const resetPassword = createAsyncThunk<ChangePasswordRes, resetPasswordPayload>(
  "user/resetPassword",
  async (resetPasswordValues: resetPasswordPayload) => {
    const token = Cookies.get("SocialMediaToken");
    const Response = await fetch(
      'https://linked-posts.routemisr.com/users/change-password',
      {
        method: "PATCH",
        body: JSON.stringify(resetPasswordValues),
        headers: {
          "Content-Type": "application/json",
          token : token
        } as HeadersInit
      }
    );
    const data: ChangePasswordRes = await Response.json();
    return data;
  }
);
export const getLoggedUserData = createAsyncThunk('user/getLoggedUserData',async()=>{
    const Response = await fetch('https://linked-posts.routemisr.com/users/profile-data',{
      method:'GET',
      headers: {
        token : Cookies.get("SocialMediaToken")
      } as HeadersInit
    });
    const res :LoggedUserData = await Response.json();
    return res;
})


const userSlice = createSlice({
  name: "user",
  initialState: <UserType>{
    name: "",
    email: "",
    password: "",
    rePassword: "",
    dateOfBirth: "",
    gender: "",
    token: Cookies.get("SocialMediaToken") ?? undefined,
    _id: "",
    photo: "",
    posts: [],
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(handleSignup.fulfilled, (state, action) => {
      console.log(state);
      console.log(action);
    });
    builder.addCase(handleSignup.rejected, (state, action) => {
      console.log(state);
      console.log(action);
    });
    builder.addCase(handleSignup.pending, (state, action) => {
      console.log(state);
      console.log(action);
    });
    builder.addCase(handleSignin.fulfilled, (state, action) => {
      console.log(state);
      console.log(action);
    });
    builder.addCase(handleSignin.pending, (state, action) => {
      console.log(state);
      console.log(action);
    });
    builder.addCase(handleSignin.rejected, (state, action) => {
      console.log(state);
      console.log(action);
    });
    builder.addCase(resetPassword.fulfilled, (state, action) => {
      console.log(state);
      console.log(action);
    });
    builder.addCase(resetPassword.pending, (state, action) => {
      console.log(state);
      console.log(action);
    });
    builder.addCase(resetPassword.rejected, (state, action) => {
      console.log(state);
      console.log(action);
    });
    builder.addCase(getLoggedUserData.fulfilled, (state, action) => {
      state.dateOfBirth = action.payload.user.dateOfBirth;
      state.email = action.payload.user.email;
      state.gender = action.payload.user.gender;
      state.name = action.payload.user.name;
      state._id = action.payload.user._id;
      state.photo = action.payload.user.photo;
      console.log(action)
      
    });
    builder.addCase(getLoggedUserData.pending, (state, action) => {
      console.log(state);
      console.log(action);
    });
  },
});

export const userSliceReducer = userSlice.reducer;
export const userSliceActions = userSlice.actions;

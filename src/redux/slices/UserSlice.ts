import { ChangePasswordRes } from "@/interfaces/changePasswordRes";
import { LoginForm } from "@/interfaces/LoginForm";
import { LoginRes } from "@/interfaces/LoginResponse";
import { RegisterForm, RegisterRes } from "@/interfaces/RegisterRes";
import { resetPasswordPayload } from "@/interfaces/resetPassword";
import { UserType } from "@/interfaces/UserSlice";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie'

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
    const Response = await fetch(
      'https://linked-posts.routemisr.com/users/change-password',
      {
        method: "PATCH",
        body: JSON.stringify(resetPasswordValues),
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${Cookies.get("SocialMediaToken")}`
        }
      }
    );
    const data: ChangePasswordRes = await Response.json();
    return data;
  }
)

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
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      
    },
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
  },
});

export const userSliceReducer = userSlice.reducer;
export const userSliceActions = userSlice.actions;

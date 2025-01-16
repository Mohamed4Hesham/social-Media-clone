import { Action } from '@reduxjs/toolkit';

export interface SigninAction extends Action<'user/handleSignin/fulfilled'> {
    error?: string;
    message?: string;
    token?: string;

}

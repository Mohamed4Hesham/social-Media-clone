import { Action } from '@reduxjs/toolkit';

export interface LoginRes extends Action<'user/handleSignin/fulfilled'> {
    error?: string;
    message?: string;
    token?: string;

}

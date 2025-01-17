export interface RegisterRes {
    error?: string
    message?: string
}

export interface RegisterForm {
    name:string,
    email:string,
    password:string,
    rePassword:string,
    dateOfBirth:string,
    gender:string
}
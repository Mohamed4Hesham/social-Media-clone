export interface UserType {
    name:string,
    email:string,
    password:string,
    rePassword:string,
    dateOfBirth:string,
    gender:string,
    token ?:string,
    posts?:string[],
    comments?:string[],
    

}
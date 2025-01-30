
export interface GetUserPosts {
    message: string;
    paginationInfo: PaginationInfo;
    Posts: Posts;
}

export interface PaginationInfo {
    currentPage: number,
    numberOfPages: number,
    limit: number,
    total: number
}

export interface Posts {
    id: string,
    body: string,
    user: User,
    createdAt: string,
    comments: [],
    _id: string
}

export interface User {
    id:string,
    name:string,
    photo: string,
}
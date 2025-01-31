export interface createPostResponse {
    error?: string;
    message?: string;
}
export interface createPostPayload {
    body?: string;
    image?: File | null;
}
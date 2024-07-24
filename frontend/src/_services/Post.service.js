import Axios from "./Axios";

// Service Posts
let getAllPosts = () => {
    return Axios.get(`/api/posts`)
}

let createPost = (data) => {
    return Axios.post("/api/posts/", data)
}

export const PostService = {
    getAllPosts, createPost
}
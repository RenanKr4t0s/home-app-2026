import axios from "axios";
import { type TAddPost, type TPost } from "../models/post-models";


const api = axios.create({
    baseURL:  "https://jsonplaceholder.typicode.com/posts"
})

export const GetAllPosts = async (limit:number=3, start:number=0):Promise<TPost[]> =>{
    const result = await api.get(`?_limit=${limit}&_start=${start}`)
    return result.data
}

    export const CreatePost = async(post:TAddPost):Promise<TPost> => {
    const data = await api.post('', post)
    return data.data
}
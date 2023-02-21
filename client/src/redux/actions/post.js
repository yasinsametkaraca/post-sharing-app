import axios from "axios";
import {toast} from "react-toastify";

export const getPostsAction = () =>  async (dispatch) => {
    try{
        const {data} = await axios.get("http://localhost:5000/posts");
        dispatch({type:"GET_POSTS",payload:data})

    }catch (err){
        toast(err.response.data.message, {
            position: "top-right",
            autoClose: 5000,
        });
    }
}
export const createPostAction = (postData) =>  async (dispatch) => {
    try{
        const {data} = await axios.post("http://localhost:5000/posts",postData);
        dispatch({type:"CREATE_POST",payload:data})
        toast("Post created successfully", {
            position: "top-right",
            autoClose: 5000,
        });
    }catch (err){
        toast(err.response.data.message, {
            position: "top-right",
            autoClose: 5000,
        });
    }
}
export const updatePostAction = (id,postData) =>  async (dispatch) => {
    try{
        const {data} = await axios.patch(`http://localhost:5000/posts/${id}`,postData);
        dispatch({type:"UPDATE_POST",payload:data})
        toast("Post updated successfully", {
            position: "top-right",
            autoClose: 5000,
        });
    }catch (err){
        toast(err.response.data.message, {
            position: "top-right",
            autoClose: 5000,
        });
    }
}
export const deletePostAction = (id) =>  async (dispatch) => {
    try{
        await axios.delete(`http://localhost:5000/posts/${id}`);
        dispatch({type:"DELETE_POST"})
        toast("Post deleted successfully", {
            position: "top-right",
            autoClose: 5000,
        });
    }catch (err){
        toast(err.response.data.message, {
            position: "top-right",
            autoClose: 5000,
        });
    }
}
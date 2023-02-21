import React from 'react';
import {RiDeleteBinLine} from "react-icons/ri";
import {RxUpdate} from "react-icons/rx"
import {useDispatch} from "react-redux";
import {deletePostAction} from "../redux/actions/post";
const PostCard = ({post}) => {
    const dispatch = useDispatch();
    const updatePost = (post) => {
        dispatch({type:"MODAL" ,payload: {open:true,post}});
    }
    const deletePost = (id) => {
        dispatch(deletePostAction(id));
    }

    return (
        <div className={"relative w-1/4 border p-3 rounded-md bg-gray-50"}>
            <div className={"font-bold text-xl"}>{post?.title}</div>
            <div className={"text-sm text-gray-800 mt-1"}>{post?.description}</div>
            <div className={"flex items-center justify-between mt-4"}>
                <span className={"text-xs text-gray-600"}>{post?.user}</span>
                <span className={"text-xs text-gray-600"}>{(post?.date)?.substring(0, 10)}</span>
            </div>
            <div className={"absolute -top-3 -right-3 flex items-center space-x-2"}>
                <RiDeleteBinLine onClick={() => deletePost(post._id)} className={"bg-red-500 rounded-full text-white p-1 cursor-pointer"} size={22}></RiDeleteBinLine>
                <RxUpdate onClick={() => updatePost(post)} className={"bg-green-500 rounded-full text-white p-1 cursor-pointer"} size={22}></RxUpdate>
            </div>
        </div>
    );
};

export default PostCard;

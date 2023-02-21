import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import PostCard from "../components/PostCard";
import {getPostsAction} from "../redux/actions/post";

const HomePage = () => {

    const {posts} = useSelector(state => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPostsAction())
    }, []);

    return (
        <div className={"flex items-center flex-wrap m-6 space-x-6"}>
            {
                posts.length > 0 && posts?.map((post,index) => (
                    <PostCard key={index} post={post}></PostCard>
                ))
            }
        </div>
    );
};

export default HomePage;

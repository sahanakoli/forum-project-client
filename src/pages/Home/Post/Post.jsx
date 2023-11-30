/* eslint-disable no-unused-vars */
import { useState } from "react";
import PostCard from "../../../component/PostCard/PostCard";
import usePost from "../../../hooks/usePost";
import e from "cors";

const Post = () => {
    const [posts] = usePost();
    
    
    return (
        <div>
            <h2 className="text-4xl font-bold text-center mt-24 ">All Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
                {
                    posts.map(post => <PostCard key={post.id} post={post}></PostCard>)
                }
            </div>
            
        </div>
    );
};

export default Post;
import PostCard from "../../../component/PostCard/PostCard";
import usePost from "../../../hooks/usePost";

const Post = () => {
    const [posts] = usePost();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
            {
                posts.map(post => <PostCard key={post.id} post={post}></PostCard>)
            }
        </div>
    );
};

export default Post;
import PostCard from "../../../component/PostCard/PostCard";
import usePost from "../../../hooks/usePost";

const Post = () => {
    const [posts] = usePost();
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                posts.map(post => <PostCard key={post.id} post={post}></PostCard>)
            }
        </div>
    );
};

export default Post;
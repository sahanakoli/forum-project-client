import TagCard from "../../../component/TagCard/TagCard";
import usePost from "../../../hooks/usePost";


const Tag = () => {
    const [posts] = usePost();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
            {
                posts.map(tags => <TagCard key={tags.id} tags={tags}></TagCard>)
            }
        </div>
    );
};

export default Tag;